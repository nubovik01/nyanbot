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

module.exports.run = async (client, interaction, command, subCommand, db, arguments) => {
  return interaction.reply({ files: [new AttachmentBuilder('./assets/pictures/omyum.jpg', 'nyam.jpg')] });
};

module.exports.help = {
  name: "omyum",
  category: "fun",
  enable: true
};