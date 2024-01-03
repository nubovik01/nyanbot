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

const { EmbedBuilder, AttachmentBuilder } = require("discord.js");
const { PREFIXES, EMBED_COLORS, OWNER_IDS, BOT_NAME, SUPPORT_SERVER, TELEGRAM_CHANNEL, GITHUB_REPO } = require('../../../config.js');
const emojis = require('../../../emojis.js');
const { oneLine } = require("common-tags");

module.exports.run = async (client, message, db, args) => {
  const prefix = PREFIXES.DEFAULT;

  if (args[0]) {
    const command = client.commands.get(args[0]) || client.commands.get(client.commandsAliases.get(args[0]));

    if (command == 'undefined' || command == undefined || command == NaN) return message.channel.send({
      content: "Мявк! Кажется, такая команда не существует."
    });

    if (command.help.category == "dev" && !OWNER_IDS.includes(message.author.id)) return message.channel.send({
      content: "Извините, получить справку об этой команде могут только разработчики бота.",
      files: [new AttachmentBuilder('./assets/gifs/haram.gif', 'haram.gif')]
    });

    const commandDescription = command.help.description;

    const commandRights = command.help.rights;

    const commandInfoHelpEmbed = new EmbedBuilder()
      .setColor(EMBED_COLORS.DEFAULT)
      .setTitle(`${emojis.DEFAULT.NOTEPAD} . Справка по команде \`${prefix}${command.help.name}\``)
      .setDescription(`${commandDescription ? commandDescription : "У этой команды пока нет описания..."}`)
      .setFields([
        {
          name: "Алиасы " + emojis.DEFAULT.MINIDISC,
          value: `\`${command.help.aliases.join(', ')}\``,
          inline: false
        },
        {
          name: "Необходимые права " + emojis.DEFAULT.POLICE,
          value: `\`${commandRights.length ? commandRights : 'отсутствуют'}\``,
          inline: true
        },
        {
          name: "Категория",
          value: `тех. ${command.help.category}`,
          inline: true
        },
        {
          name: "Примеры использования",
          value: `\`\`\`${prefix}${command.help.examples.join(`\n${prefix}`)}\`\`\``,
          inline: false
        }
      ]);

    return message.channel.send({ embeds: [commandInfoHelpEmbed] });
  };

  const commandsList = new Map();

  client.commands.forEach(command => {
    const category = command.help.category;

    if (!commandsList.has(category)) commandsList.set(category, []);

    commandsList.get(category).push(command.help.name);
  });

  const embedWithCommands = new EmbedBuilder()
    .setColor(EMBED_COLORS.DEFAULT)
    .setDescription(oneLine`
      Ссылки на ресурсы ${BOT_NAME}:
      ${emojis.CUSTOM.DISCORD} [Discord](${SUPPORT_SERVER.LINK}),
      ${emojis.CUSTOM.TELEGRAM} [Telegram](${TELEGRAM_CHANNEL})
      и ${emojis.CUSTOM.GITHUB} [GitHub](${GITHUB_REPO}).
    `
    )
    .addFields([
      {
        name: `${emojis.DEFAULT.EURO} . Экономика (**${commandsList.get('economy').length}**)`,
        value: `\`${prefix}${commandsList.get('economy').join(`\`, \`${prefix}`)}\``,
        inline: false
      },
      {
        name: `${emojis.DEFAULT.ROFL} . Развлекательные (**${commandsList.get('fun').length}**)`,
        value: `\`${prefix}${commandsList.get('fun').join(`\`, \`${prefix}`)}\``,
        inline: false
      },
      {
        name: `${emojis.DEFAULT.NOTEPAD} . Информация (**${commandsList.get('info').length}**)`,
        value: `\`${prefix}${commandsList.get('info').join(`\`, \`${prefix}`)}\``,
        inline: false
      },
      {
        name: `${emojis.DEFAULT.ROBOT} . Бот (**${commandsList.get('bot').length}**)`,
        value: `\`${prefix}${commandsList.get('bot').join(`\`, \`${prefix}`)}\``,
        inline: false
      },
      {
        name: `${emojis.DEFAULT.COMPUTER} . Для разработчиков (**${commandsList.get('dev').length}**)`,
        value: `${OWNER_IDS.includes(message.author.id) ? `\`${prefix}${commandsList.get('dev').join(`\`, \`${prefix}`)}\`` : `*Список dev-команд доступен только разработчикам ${BOT_NAME}.*`}`,
        inline: false
      },
      {
        name: `${emojis.DEFAULT.NSFW} . NSFW (**${commandsList.get('nsfw').length}**)`,
        value: `${message.channel.nsfw ? `\`${prefix}${commandsList.get('nsfw').join(`\`, \`${prefix}`)}\`` : "*Список доступен только в NSFW-канале.*"}`,
        inline: false
      }
    ]);

  return message.channel.send({ embeds: [embedWithCommands] });
};

module.exports.help = {
  name: "help",
  examples: [
    "help",
    "help ping"
  ],
  aliases: ['команды', 'commands', 'cmds'],
  rights: [],
  category: "bot",
  enable: true
};