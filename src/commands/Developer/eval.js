const Discord = require('discord.js');
const config = require('../../../config.js');

module.exports.run = async (client, message, args) => {
  if (!args[0]) return message.channel.send({ content: `Ты не указал код, который требуется выполнить. Пример использования команды: \`${PREFIX_COMMANDS.DEFAULT_PREFIX}help ${this.help.name}\`` });

  return new Promise((async resolver => {
    try {
      const code = args.join(" ");
      let evaled = await eval(code);
      console.info(code);

      if (typeof evaled !== "string") evaled = require("util").inspect(evaled);

      await message.channel.send({ content: `\`\`\`${evaled}\`\`\`` }, { code: "xl" });
      await message.channel.send({ content: `\`[${evaled.length}]\`` }, { code: "xl" });

      console.info(evaled);
      resolver();
    } catch (error) {
      console.log(error);
      message.channel.send(`**\`ERROR\`** \`\`\`xl\n${error}\n\`\`\``);
    }
  }));
}

module.exports.help = {
  name: "eval",
  examples: [
    `eval process.exit()`,
    `eval message.channel.send('xd')`,
    `eval 5+5`
  ],
  aliases: ['евал', 'эвал', 'выполнитькод'],
  category: "dev"
}