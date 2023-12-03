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

module.exports.run = async (client, interaction, command, subCommand, db, arguments) => {
  if ((arguments[0] || arguments[1]) && !OWNER_IDS.includes(interaction.user.id)) return interaction.reply({
    content: "Извините, но просмотр по параметрам доступен только разработчикам бота."
  });

  if (arguments[0] && !arguments[1]) return interaction.reply({
    content: "Для полноценной работы данной slash-команды требуется указать все аргументы."
  });

  const server = (arguments[0] == '-s' || !arguments[0]) ? interaction.guild : client.guilds.cache.get(arguments[0]);

  if (server == undefined) return interaction.reply({ content: "Я не смог найти сервер с таким ID :(" });

  const isServerOnWhitelist = WHITELIST.SERVERS_IDS.includes(server.id);

  const user = interaction.user.id || arguments[1];

  const isUserOnWhitelist = WHITELIST.USERS_IDS.includes(user);

  const userIsDeveloperOfBot = OWNER_IDS.includes(user);

  return interaction.reply({
    content: stripIndents`
      Информация по серверу **${server.name}** и пользователю с ID **${user}**

      Сервер в белом списке? ${isServerOnWhitelist ? emojis.DEFAULT.CHECK_MARK : emojis.DEFAULT.CROSS}
      Пользователь в белом списке? ${isUserOnWhitelist ? emojis.DEFAULT.CHECK_MARK : emojis.DEFAULT.CROSS}
      Вы — разработчик ${BOT_NAME}? ${userIsDeveloperOfBot ? emojis.DEFAULT.CHECK_MARK : emojis.DEFAULT.CROSS}
    `
  });
};

module.exports.help = {
  name: "whitelist",
  category: "info",
  enable: true
};