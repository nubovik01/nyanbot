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

const { PREFIXES } = require('../../../config.js');
const { oneLine } = require('common-tags');

module.exports.run = async (client, message, db, args) => {
  if (!args[0]) return message.channel.send({
    content: oneLine`
      Ты не указал код, который требуется выполнить.
      Пример использования команды: \`${PREFIXES.DEFAULT}help ${this.help.name}\`
    `
  });

  return new Promise((async resolver => {
    try {
      let evaled = await eval(args.join(" "));

      if (typeof evaled !== "string") evaled = require("util").inspect(evaled);

      await message.channel.send({
        content: `**\`[evaled.length: ${evaled.length}]\`** \`\`\`xl\n${evaled}\n\`\`\``
      });

      resolver();
    } catch (error) {
      console.log(error);
      return await message.channel.send({ content: `**\`ERROR\`** \`\`\`xl\n${error}\n\`\`\`` });
    };
  }));
};

module.exports.help = {
  name: "eval",
  examples: [
    `eval process.exit()`,
    `eval message.channel.send('xd')`,
    `eval 5+5`
  ],
  aliases: ['евал', 'эвал', 'выполнитькод'],
  rights: [],
  category: "dev",
  enable: true
};