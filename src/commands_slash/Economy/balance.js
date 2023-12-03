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

module.exports.run = async (client, interaction, command, subCommand, db, arguments) => {
  const targetUser = (arguments.length !== 0 && /\d{18}/gm.test(arguments[0]) ? { id: arguments[0] } : interaction.user);

  if (!await db.checkUserExistence(targetUser.id)) return interaction.reply({
    content: "Невозможно проверить баланс! Выбранный Вами пользователь ни разу не пользовался ботом."
  });

  const user = await db.getUser(targetUser.id);
  const balance = await user.getCoins();

  return interaction.reply({
    content: `У **${await user.getDiscordNickname()}** на балансе \`${balance}\` ${emojis.DEFAULT.EURO} прямо сейчас.`
  });
};

module.exports.help = {
  name: "balance",
  category: "economy",
  enable: true
};