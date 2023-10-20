//                  _         _                   
//    __ ___      _| | ___ __| |_ ___ ____________
//   / _` \ \ /\ / / |/ / '__| __/ _ \_  /_  /_  /
//  | (_| |\ V  V /|   <| |  | ||  __// / / / / / 
//   \__, | \_/\_/ |_|\_\_|   \__\___/___/___/___|
//      |_|                                       
//
// Code is licensed under MIT unless otherwise specified.
// https://opensource.org/license/mit/
// (c) t.me/qwkrtezzz (https://github.com/nubovik01)

const emojis = require('../../../emojis.js');

module.exports.run = async (client, interaction, command, subCommand, arguments) => {
  return interaction.reply(`Измеряю задержку... ${emojis.DEFAULT.SEARCH_RIGHT}`).then((resultMessage) => {
    const ping = resultMessage.createdTimestamp - interaction.createdTimestamp;

    resultMessage.edit(`Время задержки Websocket — ${client.ws.ping} мс, отправка сообщения заняла ${Date.now() - interaction.createdTimestamp} мс, пинг бота — ${ping} мс.`)
  });
};

module.exports.help = {
  name: "ping",
  category: "bot",
  enable: true
};