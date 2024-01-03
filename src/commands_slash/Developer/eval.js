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

module.exports.run = async (client, interaction, command, subCommand, db, arguments) => {
  return new Promise((async resolver => {
    try {
      let evaled = await eval(arguments[0]);

      if (typeof evaled !== "string") evaled = require("util").inspect(evaled);

      interaction.reply({ content: `**\`[evaled.length: ${evaled.length}]\`** \`\`\`xl\n${evaled}\n\`\`\`` });

      resolver();
    } catch (error) {
      console.log(error);
      return interaction.reply({ content: `**\`ERROR\`** \`\`\`xl\n${error}\n\`\`\`` });
    };
  }));
};

module.exports.help = {
  name: "eval",
  category: "dev",
  enable: true
};