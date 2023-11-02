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

const { EmbedBuilder, AttachmentBuilder } = require("discord.js");
const { PREFIXES, EMBED_COLORS, OWNER_IDS } = require('../../../config.js');
const emojis = require('../../../emojis.js');

module.exports.run = async (client, message, args) => {
  if (args[0]) {
    const command = client.commands.get(args[0]) || client.commands.get(client.commandsAliases.get(args[0]));

    if ((command == 'undefined' || command == undefined || command == NaN)) return message.channel.send({
      content: "Мявк! Кажется, такая команда не существует."
    });

    if (command.help.category == "dev" && !OWNER_IDS.includes(message.author.id)) return message.channel.send({
      content: "Извините, получить справку об этой команде могут только разработчики бота.",
      files: [new AttachmentBuilder('./assets/gifs/haram.gif', 'haram.gif')]
    });

    const commandInfoHelpEmbed = new EmbedBuilder()
      .setColor(EMBED_COLORS.BOT_EMBED)
      .setTitle(`${emojis.DEFAULT.NOTEPAD} . Справка по команде \`${PREFIXES.DEFAULT}${command.help.name}\``)
      .setDescription(`${command.help.description ? command.help.description : "У этой команды пока нет описания..."}`)
      .setFields([
        {
          name: "Алиасы",
          value: `\`${command.help.aliases.join(', ')}\``,
          inline: true
        },
        {
          name: "Категория",
          value: `тех. ${command.help.category}`,
          inline: true
        },
        {
          name: "Примеры использования",
          value: `\`\`\`${PREFIXES.DEFAULT}${command.help.examples.join(`\n${PREFIXES.DEFAULT}`)}\`\`\``
        }
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
  rights: [],
  category: "bot",
  enable: true
};