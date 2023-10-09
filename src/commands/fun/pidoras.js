const { PREFIXES } = require('../../../config.js');

module.exports.run = async (client, message, args) => {
  if (!args[0]) return message.channel.send({
    content: `Ты не указал, кого надо назвать пидорасом. Пример использования команды: \`${PREFIXES.DEFAULT}help ${this.help.name}\``
  });

  if (args[0] == '-plural') {
    if (!args[1]) return message.channel.send({
      content: `Ты не указал, кого надо назвать пидорасом. Пример использования команды: \`${PREFIXES.DEFAULT}help ${this.help.name}\``
    });

    return message.channel.send({ content: `${args[1]} пидорасы ебаные.` });
  };

  return message.channel.send({ content: `${args[0]} пидорас ебаный.` });
};

module.exports.help = {
  name: "pidoras",
  examples: [
    "pidoras никита"
  ],
  aliases: ['пидорас'],
  category: "fun",
  enable: true
}