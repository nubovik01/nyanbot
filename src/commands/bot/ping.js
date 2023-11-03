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

module.exports.run = async (client, message, args) => {
  return message.channel.send({ content: `Измеряю задержку... ${emojis.DEFAULT.SEARCH_RIGHT}` }).then((resultMessage) => {
    const ping = resultMessage.createdTimestamp - message.createdTimestamp;
    const messageSendingTime = Date.now() - message.createdTimestamp;

    resultMessage.edit({
      content: `Время задержки Websocket — ${client.ws.ping} мс, отправка сообщения заняла ${messageSendingTime} мс, пинг бота — ${ping} мс.`
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