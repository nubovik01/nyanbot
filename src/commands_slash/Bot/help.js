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
const {
  EMBED_COLORS, SUPPORT_SERVER, TELEGRAM_CHANNEL,
  BOT_NAME, PREFIXES, OWNER_IDS, GITHUB_REPO
} = require('../../../config.js');
const emojis = require('../../../emojis.js');
const { oneLine } = require('common-tags');

module.exports.run = async (client, interaction, command, subCommand, db, arguments) => {
  if (arguments[0]) {
    const command = client.slashCommands.get(arguments[0])
      || client.slashCommands.get(client.commandsAliases.get(arguments[0]));

    if ((command == 'undefined' || command == undefined || command == NaN)) return interaction.reply({
      content: "Мявк! Кажется, такая команда не существует."
    });

    if (command.help.category == "dev" && !OWNER_IDS.includes(interaction.user.id)) return interaction.reply({
      content: "Извините, получить справку об этой команде могут только разработчики бота.",
      files: [new AttachmentBuilder('./assets/gifs/haram.gif', 'haram.gif')]
    });

    const slashCommandInfoHelpEmbed = new EmbedBuilder()
      .setColor(EMBED_COLORS.DEFAULT)
      .setTitle(`${emojis.DEFAULT.NOTEPAD} . Справка по slash-команде \`/${command.help.name}\``)
      .setDescription(`Описание доступно при написании slash-команды \`/${command.help.name}\``)
      .setFields([
        {
          name: "Алиасы " + emojis.DEFAULT.MINIDISC,
          value: `Slash-команды не поддерживают алиасы.`,
          inline: false
        },
        {
          name: "Категория",
          value: `тех. ${command.help.category}`,
          inline: false
        }
      ]);

    return interaction.reply({ embeds: [slashCommandInfoHelpEmbed] });
  };

  const commandsList = new Map();

  client.slashCommands.forEach(command => {
    const category = command.help.category;

    if (!commandsList.has(category)) commandsList.set(category, []);

    commandsList.get(category).push(command.help.name);
  });

  const embedWithSlashCommands = new EmbedBuilder()
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
        value: `\`/${commandsList.get('economy').join(`\`, \`/`)}\``,
        inline: false
      },
      {
        name: `${emojis.DEFAULT.ROFL} . Развлекательные (**${commandsList.get('fun').length}**)`,
        value: `\`/${commandsList.get('fun').join(`\`, \`/`)}\``,
        inline: false
      },
      {
        name: `${emojis.DEFAULT.NOTEPAD} . Информация (**${commandsList.get('info').length}**)`,
        value: `\`/${commandsList.get('info').join(`\`, \`/`)}\``,
        inline: false
      },
      {
        name: `${emojis.DEFAULT.ROBOT} . Бот (**${commandsList.get('bot').length}**)`,
        value: `\`/${commandsList.get('bot').join(`\`, \`/`)}\``,
        inline: false
      },
      {
        name: `${emojis.DEFAULT.COMPUTER} . Для разработчиков (**${commandsList.get('dev').length}**)`,
        value: `${OWNER_IDS.includes(interaction.user.id)
          ? `\`/${commandsList.get('dev').join(`\`, \`/`)}\``
          : `*Список dev-команд доступен только разработчикам ${BOT_NAME}.*`}`,
        inline: false
      },
      {
        name: `${emojis.DEFAULT.NSFW} . NSFW (**${commandsList.get('nsfw').length}**)`,
        value: `${interaction.channel.nsfw
          ? `\`/${commandsList.get('nsfw').join(`\`, \`/`)}\``
          : "*Список доступен только в NSFW-канале.*"}`,
        inline: false
      }
    ]);

  return interaction.reply({ embeds: [embedWithSlashCommands] });
};

module.exports.help = {
  name: "help",
  category: "bot",
  enable: true
};