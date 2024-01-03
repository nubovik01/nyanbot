//                  _         _                   
//    __ ___      _| | ___ __| |_ ___ ____________
//   / _` \ \ /\ / / |/ / '__| __/ _ \_  /_  /_  /
//  | (_| |\ V  V /|   <| |  | ||  __// / / / / / 
//   \__, | \_/\_/ |_|\_\_|   \__\___/___/___/___|
//      |_|                                       
//
// Code is licensed under MIT unless otherwise specified.
// https://opensource.org/license/mit/
// (c) qwkrtezzz (https://github.com/nubovik01)

const emojis = require('../../../emojis.js');
const { oneLine } = require('common-tags');

module.exports.run = async (client, message, db, args) => {
  const targetUser = message.mentions.users.first()
    || (args.length !== 0 && /\d{18}/gm.test(args[0])
      ? { id: args[0] }
      : message.author);

  if (!await db.checkUserExistence(targetUser.id)) return message.channel.send({
    content: "Невозможно проверить баланс! Выбранный Вами пользователь ни разу не пользовался ботом."
  });

  const user = await db.getUser(targetUser.id);
  const balance = await user.getCoins();

  return message.channel.send({
    content: oneLine`
      У пользователя **${await user.getDiscordNickname()}**
      на балансе \`${balance}\` ${emojis.DEFAULT.EURO} прямо сейчас.
    `
  });
};

module.exports.help = {
  name: "balance",
  examples: [
    "balance",
    "balance @Wumpus",
  ],
  aliases: ['баланс', 'bal'],
  rights: [],
  category: "economy",
  enable: true
};