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

const { PREFIXES } = require('../../../config.js');
const { AttachmentBuilder } = require('discord.js');

module.exports.run = async (client, message, args) => {
  if(!args[0]) return message.channel.send({
    content: `Вы не указали текст, который требуется наложить на картинку с котиком. Пример использования команды: \`${PREFIXES.DEFAULT}help ${this.help.name}\``
  });

  return message.channel.send({ files: [new AttachmentBuilder(`https://cataas.com/cat/says/${args.join(" ")}.jpg`)] });
};

module.exports.help = {
  name: "catsays",
  examples: [
    "catsays \"фембойчики :3\""
  ],
  aliases: ['sayscat'],
  category: "fun",
  enable: true
};