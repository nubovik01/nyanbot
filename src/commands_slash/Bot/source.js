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

const { GITHUB_REPO } = require('../../../config.js');
const emojis = require('../../../emojis.js');

module.exports.run = async (client, interaction, command, subCommand, db, arguments) => {
  return interaction.reply({ content: `<${GITHUB_REPO}> ${emojis.CUSTOM.GITHUB}` });
};

module.exports.help = {
  name: "source",
  category: "bot",
  enable: true
};