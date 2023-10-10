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

const NSFW = require('../../utils/RequestHandlerNSFW.js');
const { AttachmentBuilder } = require('discord.js');

module.exports.run = async (client, interaction, command, subCommand, arguments) => {
  // oh, look to this govnocode.....

  const nsfwSubCommandsList = {
    'anal': () => NSFW.porn.anal(),
    'hanal': () => NSFW.porn.hanal(),
    'ass': () => NSFW.porn.ass(),
    'pussy': () => NSFW.porn.pussy(),
    'boobs': () => NSFW.porn.boobs(),
    'hboobs': () => NSFW.porn.hboobs(),
    'boobs2': () => NSFW.porn.boobs2(),
    'hentai': () => NSFW.porn.hentai(),
    'hass': () => NSFW.porn.hass(),
    'hneko': () => NSFW.porn.hneko(),
    'tentacle': () => NSFW.porn.tentacle(),
    'yaoi': () => NSFW.porn.yaoi(),
    'nekotits': () => NSFW.porn.nekotits()
  };

  return interaction.reply({ files: [new AttachmentBuilder(await nsfwSubCommandsList[subCommand]())] });
};

module.exports.help = {
  name: "nsfw",
  aliases: ['нсфв'],
  category: "nsfw",
  enable: true
};