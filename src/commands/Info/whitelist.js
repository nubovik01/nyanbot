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

const { BOT_NAME, WHITELIST, OWNER_IDS } = require('../../../config.js');
const emojis = require('../../../emojis.js');
const { stripIndents } = require("common-tags");

module.exports.run = async (client, message, db, args) => {
  if ((args[0] || args[1]) && !OWNER_IDS.includes(message.author.id)) return message.channel.send({
    content: "Извините, но просмотр по параметрам доступен только разработчикам бота."
  });

  const server = (args[0] == '-s' || !args[0]) ? message.guild : client.guilds.cache.get(args[0]);

  if (server == undefined) return message.channel.send({ content: "Я не смог найти сервер с таким ID :(" });

  const isServerOnWhitelist = WHITELIST.SERVERS_IDS.includes(server.id);

  const user = (args[1] == '-u' || !args[1]) ? message.author : (message.mentions.users.first() || args[1]);

  const isUserOnWhitelist = WHITELIST.USERS_IDS.includes(user.id);

  const userIsDeveloperOfBot = OWNER_IDS.includes(user.id);

  return message.channel.send({
    content: stripIndents`
      Информация по серверу **${server.name}** и пользователю **${user.username}**

      Сервер в белом списке? ${isServerOnWhitelist ? emojis.DEFAULT.CHECK_MARK : emojis.DEFAULT.CROSS}
      Пользователь в белом списке? ${isUserOnWhitelist ? emojis.DEFAULT.CHECK_MARK : emojis.DEFAULT.CROSS}
      Вы — разработчик ${BOT_NAME}? ${userIsDeveloperOfBot ? emojis.DEFAULT.CHECK_MARK : emojis.DEFAULT.CROSS}
    `
  });
};

module.exports.help = {
  name: "whitelist",
  examples: [
    "whitelist",
    "whitelist 457858774099689479 @Wumpus",
    "whitelist 848936883698401280 -u",
    "whitelist 983139612866281543 454314234830913557",
    "whitelist -s -u",
    "whitelist -s 754428134941655173"
  ],
  aliases: ['вайтлист', 'белыйсписок'],
  rights: [],
  category: "info",
  enable: true
};