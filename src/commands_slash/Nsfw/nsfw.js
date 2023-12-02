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

module.exports.run = async (client, interaction, command, subCommand, db, arguments) => {
  const nsfwSubCommandsList = {
    'anal': () => porn.anal(),
    'hanal': () => porn.hanal(),
    'ass': () => porn.ass(),
    'pussy': () => porn.pussy(),
    'boobs': () => porn.boobs(),
    'hboobs': () => porn.hboobs(),
    'boobs2': () => porn.boobs2(),
    'hentai': () => porn.hentai(),
    'hass': () => porn.hass(),
    'hneko': () => porn.hneko(),
    'tentacle': () => porn.tentacle(),
    'yaoi': () => porn.yaoi()
  };

  return interaction.reply({ files: [new AttachmentBuilder(await nsfwSubCommandsList[subCommand]())] });
};

module.exports.help = {
  name: "nsfw",
  category: "nsfw",
  enable: true
};