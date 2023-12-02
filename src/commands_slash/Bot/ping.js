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
  const messageSendingTime = Date.now() - interaction.createdTimestamp;

  return interaction.reply({ content: `Измеряю задержку... ${emojis.DEFAULT.SEARCH_RIGHT}` }).then(async(resultMessage) => {
    resultMessage.edit({
      content: `Pong! Websocket — ${client.ws.ping} мс, БД — ${await db.getPing()} мс, отправка сообщения заняла ${messageSendingTime} мс.`
    });
  });
};

module.exports.help = {
  name: "ping",
  category: "bot",
  enable: true
};