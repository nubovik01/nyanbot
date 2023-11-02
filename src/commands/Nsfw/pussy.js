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

const { porn } = require('../../handlers/RequestHandlerNSFW.js');
const { AttachmentBuilder } = require('discord.js');

module.exports.run = async (client, message, args) => {
  return message.channel.send({ files: [new AttachmentBuilder(await porn.pussy())] });
};

module.exports.help = {
  name: "pussy",
  examples: [
    "pussy"
  ],
  aliases: ['nsfwpussy', 'киска'],
  rights: [],
  category: "nsfw",
  enable: true
};