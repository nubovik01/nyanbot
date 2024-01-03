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
const Canvas = require('canvas');
const { AttachmentBuilder } = require('discord.js');
const { oneLine } = require('common-tags');

module.exports.run = async (client, message, db, args) => {
  if (message.attachments.size <= 0) return message.channel.send({
    content: oneLine`
      К сообщению с командой необходимо приложить фотографию, которую вы хотите наложить на пикчу.
      Пример использования команды: \`${PREFIXES.DEFAULT}help ${this.help.name}\`
    `
  });

  const fileURL = message.attachments.first().url;

  if (!/(.jpeg|.jpg|.png)/.test(fileURL)) return message.channel.send({
    content: "Поддерживаются только изображения в формате .JPG, .PNG и .JPEG."
  });

  const canvas = Canvas.createCanvas(1150, 1500);

  const context = canvas.getContext('2d');

  const background = await Canvas.loadImage('./assets/pictures/dream.jpg');

  context.drawImage(background, 0, 0, canvas.width, canvas.height);

  const image = await Canvas.loadImage(fileURL);

  context.drawImage(image, canvas.width / 4.3, 698, 611, 780); // [0]: ->, [1]: ^!, [2]: <!>, [3]: >!<

  return message.channel.send({
    content: "created w/ nyanbot, meow! <3",
    files: [new AttachmentBuilder(canvas.toBuffer())]
  });
};

module.exports.help = {
  name: "dream",
  examples: [
    "dream [фотография]"
  ],
  aliases: ['снившийсячеловек'],
  rights: [],
  category: "fun",
  enable: true
};