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
  const botStartedTimestamp = `${client.readyTimestamp}`;

  return message.channel.send({ content: `Бот был запущен <t:${botStartedTimestamp.slice(0, -3)}:R> ${emojis.DEFAULT.WATCH}` });
};

module.exports.help = {
  name: "uptime",
  examples: [
    "uptime"
  ],
  aliases: ['аптайм'],
  category: "bot",
  enable: true
};