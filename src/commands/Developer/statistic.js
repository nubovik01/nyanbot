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

const { stripIndents } = require("common-tags");

module.exports.run = async (client, message, db, args) => {
  if (!args[0]) return message.channel.send({ content: "Ты не указал ID пользователя, информацию о котором хочешь получить." });

  const user = await db.getUser(args[0]);
  const userLastUsedCommand = await user.getDateOfLastUsedCommand();
  const userLastUsedSlashCommand = await user.getDateOfLastUsedSlashCommand();
  const userDiscordNickname = await user.getDiscordNickname() || "не записан";

  const userLastUsedCommandText = userLastUsedCommand ? `<t:${userLastUsedCommand}:R>` : "[никогда]";
  const userLastUsedSlashCommandText = userLastUsedSlashCommand ? `<t:${userLastUsedSlashCommand}:R>` : "[никогда]";

  return message.channel.send({
    content: stripIndents`
      Информация о пользователе с ID **\`${args[0]}\`**

      · Использовано команд: **${await user.getCommandsUsages()}** ☇
      · Последняя команда использована ${userLastUsedCommandText}
      · Использовано slash-команд: **${await user.getSlashCommandsUsages()}** ☇
      · Последняя slash-команда использована ${userLastUsedSlashCommandText}
      · Никнейм дискорд-аккаунта в БД: \`${userDiscordNickname}\`
    `
  });
};

module.exports.help = {
  name: "statistic",
  examples: [
    "statistic 972459903253889034"
  ],
  aliases: ['статистика'],
  rights: [],
  category: "dev",
  enable: true
};