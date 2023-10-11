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

const NSFW = require('../../handlers/RequestHandlerNSFW.js');
const { AttachmentBuilder } = require('discord.js');

module.exports.run = async (client, interaction, command, arguments) => {
  return interaction.reply({
    files: [new AttachmentBuilder(await NSFW.porn.hentai())]
  });
};

module.exports.help = {
  name: "hentai",
  examples: [
    "hentai"
  ],
  aliases: ['nsfwhentai', 'хентай', 'хент'],
  category: "nsfw",
  enable: true
};