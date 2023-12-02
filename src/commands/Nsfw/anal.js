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

const { porn } = require('../../handlers/RequestHandlerNSFW.js');
const { AttachmentBuilder } = require('discord.js');

module.exports.run = async (client, message, db, args) => {
  return message.channel.send({ files: [new AttachmentBuilder(await porn.anal())] });
};

module.exports.help = {
  name: "anal",
  examples: [
    "anal"
  ],
  aliases: ['nsfwanal', 'анал'],
  rights: [],
  category: "nsfw",
  enable: true
};