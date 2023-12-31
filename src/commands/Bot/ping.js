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
  const messageSendingTime = Date.now() - message.createdTimestamp;

  return message.channel.send({ content: `Измеряю задержку... ${emojis.DEFAULT.SEARCH_RIGHT}` })
    .then(async (resultMessage) => {
      resultMessage.edit({
        content: oneLine`
          Pong!
          Websocket — ${client.ws.ping} мс,
          БД — ${await db.getPing()} мс,
          отправка сообщения заняла ${messageSendingTime} мс.
        `
      });
    });
};

module.exports.help = {
  name: "ping",
  examples: [
    "ping"
  ],
  aliases: ['пинг', 'pong', 'понг', 'времяответа', 'pung', 'pibg', 'pinf', 'pugf'],
  rights: [],
  category: "bot",
  enable: true
};