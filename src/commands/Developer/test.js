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
  return message.channel.send(emojis.DEFAULT.CHECK_MARK);
};

module.exports.help = {
  name: "test",
  examples: [
    `test`
  ],
  aliases: ['тест', 't1'],
  rights: ['BanMembers'],
  category: "dev",
  enable: true
};