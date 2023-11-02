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

const { animals } = require('../../handlers/AnimalsRequestHandler.js');
const { AttachmentBuilder } = require('discord.js');

module.exports.run = async (client, message, args) => {
  message.channel.send({ files: [new AttachmentBuilder(await animals.lizard())] });
};

module.exports.help = {
  name: "lizard",
  examples: [
    "lizard"
  ],
  aliases: ['змея'],
  rights: [],
  category: "fun",
  enable: true
};