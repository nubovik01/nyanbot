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

const { AttachmentBuilder } = require('discord.js');

module.exports.run = async (client, message, db, args) => {
  const link = "https://cdn.discordapp.com/attachments/754717585534353519/1137801194421620798/0dded03a6843cba5babaa68805deef48.jpg";
  return message.channel.send({ files: [new AttachmentBuilder(link)] });
};

module.exports.help = {
  name: "omyum",
  examples: [
    "omyum"
  ],
  aliases: ['amnyam', 'амням'],
  rights: [],
  category: "fun",
  enable: true
};