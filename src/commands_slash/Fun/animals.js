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

const { animals } = require('../../handlers/AnimalsRequestHandler.js');
const { AttachmentBuilder } = require('discord.js');

module.exports.run = async (client, interaction, command, subCommand, arguments) => {
  const animalsSubCommandList = {
    'httpcat': () => animals.httpCat(arguments[0]),
    'bunny': () => animals.bunny(),
    'dog': () => animals.dog(),
    'duck': () => animals.duck(),
    'lizard': () => animals.lizard(),
    'catsays': () => animals.catsays(arguments[0])
  };

  return interaction.reply({ files: [new AttachmentBuilder(await animalsSubCommandList[subCommand]())] });
};

module.exports.help = {
  name: "animals",
  category: "fun",
  enable: true
};