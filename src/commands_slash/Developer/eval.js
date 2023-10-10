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

module.exports.run = async (client, interaction, command, arguments) => {
  return new Promise((async resolver => {
    try {
      let evaled = await eval(arguments[0]);

      if (typeof evaled !== "string") evaled = require("util").inspect(evaled);

      await interaction.reply({ content: `**\`[evaled.length: ${evaled.length}]\`** \`\`\`xl\n${evaled}\n\`\`\`` }, { code: 'xl' });

      resolver();
    } catch (error) {
      console.log(error);
      return await interaction.reply(`**\`ERROR\`** \`\`\`xl\n${error}\n\`\`\``);
    };
  }));
};

module.exports.help = {
  name: "eval",
  aliases: ['евал', 'эвал', 'выполнитькод'],
  category: "dev",
  enable: true
};