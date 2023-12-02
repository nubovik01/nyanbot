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
const { PREFIXES, EMBED_COLORS, OWNER_IDS, BOT_NAME, TELEGRAM_CHANNEL, SUPPORT_SERVER } = require('../../../config.js');
const emojis = require('../../../emojis.js');

module.exports.run = async (client, interaction, command, subCommand, db, arguments) => {
  const prefix = PREFIXES.DEFAULT;

  if (arguments[0]) {
    const command = client.commands.get(arguments[0]) || client.commands.get(client.commandsAliases.get(arguments[0]));

    if ((command == 'undefined' || command == undefined || command == NaN)) return interaction.reply({
      content: "Мявк! Кажется, такая команда не существует."
    });

    if (command.help.category == "dev" && !OWNER_IDS.includes(interaction.user.id)) return interaction.reply({
      content: "Извините, получить справку об этой команде могут только разработчики бота.",
      files: [new AttachmentBuilder('./assets/gifs/haram.gif', 'haram.gif')]
    });

    const commandDescription = command.help.description;

    const commandRights = command.help.rights;

    const commandInfoHelpEmbed = new EmbedBuilder()
      .setColor(EMBED_COLORS.BOT_EMBED)
      .setTitle(`${emojis.DEFAULT.NOTEPAD} . Справка по команде \`/${command.help.name}\``)
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
          value: `\`\`\`/${command.help.examples.join(`\n${prefix}`)}\`\`\``,
          inline: false
        }
      ]);

    return interaction.reply({ embeds: [commandInfoHelpEmbed] });
  };

  const commandsList = { bot: [], dev: [], fun: [], info: [], nsfw: [] };

  client.slashCommands.forEach(command => {
    commandsList[command.help.category].push(command.help.name);
  });

  const embedWithCommands = new EmbedBuilder()
    .setColor(EMBED_COLORS.BOT_EMBED)
    .setDescription(`Ссылки на ресурсы ${BOT_NAME}: ${emojis.CUSTOM.DISCORD} [Discord](${SUPPORT_SERVER}) и ${emojis.CUSTOM.TELEGRAM} [Telegram](${TELEGRAM_CHANNEL})`)
    .addFields([
      {
        name: `${emojis.DEFAULT.ROFL} . Развлекательные (**${commandsList['fun'].length}**)`,
        value: `\`/${commandsList['fun'].join(`\`, \`/`)}\``,
        inline: false
      },
      {
        name: `${emojis.DEFAULT.NOTEPAD} . Информация (**${commandsList['info'].length}**)`,
        value: `\`/${commandsList['info'].join(`\`, \`/`)}\``,
        inline: false
      },
      {
        name: `${emojis.DEFAULT.ROBOT} . Бот (**${commandsList['bot'].length}**)`,
        value: `\`/${commandsList['bot'].join(`\`, \`/`)}\``,
        inline: false
      },
      {
        name: `${emojis.DEFAULT.COMPUTER} . Для разработчиков (**${commandsList['dev'].length}**)`,
        value: `${OWNER_IDS.includes(interaction.user.id) ? `\`/${commandsList['dev'].join(`\`, \`/`)}\`` : `*Список dev-команд доступен только разработчикам ${BOT_NAME}.*`}`,
        inline: false
      },
      {
        name: `${emojis.DEFAULT.NSFW} . NSFW (**${commandsList['nsfw'].length}**)`,
        value: `${interaction.channel.nsfw ? `\`/${commandsList['nsfw'].join(`\`, \`/`)}\`` : "*Список доступен только в NSFW-канале.*"}`,
        inline: false
      }
    ]);
  
  return interaction.reply({ embeds: [embedWithCommands] });
};

module.exports.help = {
  name: "help",
  category: "bot",
  enable: true
};