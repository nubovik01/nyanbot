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

module.exports.run = async (client, interaction, command, subCommand, arguments) => {
  if (arguments[0] == true) {
    return interaction.reply({ content: `${arguments[1]} пидорасы ебаные.` });
  };

  return interaction.reply({ content: `${arguments[1]} пидорас ебаный.` });
};

module.exports.help = {
  name: "pidoras",
  category: "fun",
  enable: true
};