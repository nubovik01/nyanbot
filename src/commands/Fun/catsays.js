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

const { PREFIXES } = require('../../../config.js');
const { AttachmentBuilder } = require('discord.js');
const { oneLine } = require('common-tags');

module.exports.run = async (client, message, db, args) => {
  if (!args[0]) return message.channel.send({
    content: oneLine`Вы не указали текст, который требуется наложить на картинку с котиком.
    Пример использования команды: \`${PREFIXES.DEFAULT}help ${this.help.name}\``
  });

  const picture = await fetch("https://cataas.com/cat/says/" + args.join(" "));

  const bufferOfPicture = Buffer.from(await picture.arrayBuffer());

  return message.channel.send({
    content: "created w/ nyanbot & cataas.com, meow! <3",
    files: [new AttachmentBuilder(bufferOfPicture, 'kekw.jpg')]
  });
};

module.exports.help = {
  name: "catsays",
  examples: [
    "catsays \"фембойчики :3\""
  ],
  aliases: ['sayscat'],
  rights: [],
  category: "fun",
  enable: true
};