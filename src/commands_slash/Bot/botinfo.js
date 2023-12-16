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

const { EmbedBuilder } = require("discord.js");
const { BOT_NAME, EMBED_COLORS, VERSION_MANAGEMENT_SYMBOL, PREFIXES, SUPPORT_SERVER, TELEGRAM_CHANNEL, GITHUB_REPO } = require('../../../config.js');
const emojis = require('../../../emojis.js');
const { version, dependencies } = require('../../../package.json');
const { stripIndent, oneLine } = require('common-tags');

module.exports.run = async (client, interaction, command, subCommand, db, arguments) => {
  const botVersion = `${version}${VERSION_MANAGEMENT_SYMBOL}`;
  const discordJsVersion = dependencies['discord.js'].substring(1);
  const postgresqlVersion = (await db.getVersion()).split(" ");
  const botUptime = `${client.readyTimestamp}`.slice(0, -3);

  const embedWithInfoAboutBot = new EmbedBuilder()
    .setTitle(`${emojis.DEFAULT.CAT} . Информация о ${BOT_NAME}`)
    .setColor(EMBED_COLORS.DEFAULT)
    .setDescription(stripIndent`
      ${emojis.DEFAULT.LABEL} Название бота: \`${BOT_NAME}\`
      ${emojis.DEFAULT.CLOCK4} Время запуска: <t:${botUptime}:R>
      ${emojis.DEFAULT.PIN} Префикс: \`${PREFIXES.DEFAULT}\`

      Количество команд: \`${client.commands.size}\` (алиасов: \`${client.commandsAliases.size}\`)
      Количество slash-команд: \`${client.slashCommands.size}\`
    `
    )
    .setFields([
      {
        name: `${emojis.DEFAULT.LINK} . Ресурсы бота`,
        value: oneLine`
          ${emojis.CUSTOM.DISCORD} [Discord](${SUPPORT_SERVER.LINK}),
          ${emojis.CUSTOM.TELEGRAM} [Telegram](${TELEGRAM_CHANNEL})
          и ${emojis.CUSTOM.GITHUB} [GitHub](${GITHUB_REPO})
        `,
        inline: false
      },
      {
        name: `${emojis.DEFAULT.BAR_CHART} . Статистика бота`,
        value: stripIndent`
          Каналов (кэш): \`${client.channels.cache.size}\`
          Серверов (кэш): \`${client.guilds.cache.size}\`
          Пользователей (кэш): \`${client.users.cache.size}\`
          Пользователей (БД): \`${await db.getUsersCount()}\`
          Эмодзи (кэш): \`${client.emojis.cache.size}\`
        `,
        inline: false
      },
      {
        name: `${emojis.DEFAULT.SETTINGS} Версии зависимостей`,
        value: stripIndent`
          ${BOT_NAME} ${emojis.DEFAULT.CAT}: v${botVersion}
          Node.JS ${emojis.CUSTOM.NODEJS}: ${process.version}
          PostgreSQL ${emojis.CUSTOM.POSTGRESQL}: v${postgresqlVersion[1]}
          discord.js ${emojis.CUSTOM.DISCORD}: v${discordJsVersion}
        `,
        inline: false
      },
      {
        name: `${emojis.DEFAULT.WATCH} . Задержка`,
        value: stripIndent`
          Websocket: \`${client.ws.ping} мс\`
          Отправка сообщения: \`${Date.now() - interaction.createdTimestamp} мс\`
          База данных: \`${await db.getPing()} мс\`
        `,
        inline: false
      }
    ])

  return interaction.reply({ embeds: [embedWithInfoAboutBot] });
};

module.exports.help = {
  name: "botinfo",
  category: "bot",
  enable: true
};