const { EmbedBuilder, AttachmentBuilder } = require("discord.js");
const { PREFIX_COMMANDS, EMBED_COLORS, OWNER_IDS } = require('../../../config.js');
const emojis = require('../../../emojis.js');

module.exports.run = async (client, message, args) => {
  // TODO: добавить подсказки по типу "А вы знали, что командой %s можно %s?"

  if (args[0]) {
    const command = client.commands.get(args[0]) || client.commands.get(client.commandsAliases.get(args[0]));

    if ((command == 'undefined' || command == undefined || command == NaN)) return message.channel.send({ content: "Мявк! Кажется, такая команда не существует." });

    if (command.help.category == "dev" && !OWNER_IDS.includes(message.author.id)) return message.channel.send({
      content: "Извините, получить справку об этой команде могут только разработчики бота.",
      files: [new AttachmentBuilder('./assets/gifs/haram.gif', 'haram.gif')]
    });

    const commandInfoHelpEmbed = new EmbedBuilder()
      .setColor(EMBED_COLORS.BOT_EMBED)
      .setTitle(`${emojis.DEFAULT.NOTEPAD} . Справка по команде \`${PREFIX_COMMANDS.DEFAULT_PREFIX}${command.help.name}\``)
      // TODO: сделать описания командам в локализацию
      .setDescription(`${command.help.description ? command.help.description : "У этой команды пока нет описания..."}`)
      .setFields([
        {name: "Алиасы", value: `\`${command.help.aliases.join(', ')}\``, inline: true},
        {name: "Категория", value: `тех. ${command.help.category}`, inline: true},
        {name: "Примеры использования", value: `\`\`\`${PREFIX_COMMANDS.DEFAULT_PREFIX}${command.help.examples.join(`\n${PREFIX_COMMANDS.DEFAULT_PREFIX}`)}\`\`\``}
      ])

    return message.channel.send({ embeds: [commandInfoHelpEmbed] });
  };

  return message.channel.send({ content: "Ой-ой! Мявк! Эта команда пока в разработке :(" });
};

module.exports.help = {
  name: "help",
  examples: [
    "help",
    "help ping"
  ],
  aliases: ['команды', 'commands'],
  rights: [{
    onDiscord: [{
      bot: [],
      user: []
    }],
    onBot: [{
      user: []
    }]
  }],
  category: "bot",
  enable: true
};