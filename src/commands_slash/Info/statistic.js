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

module.exports.run = async (client, interaction, command, subCommand, db, arguments) => {
  const user = await db.getUser(arguments[0] || interaction.user.id);
  const userLastUsedCommand = await user.getDateOfLastUsedCommand();
  const userLastUsedSlashCommand = await user.getDateOfLastUsedSlashCommand();
  const userDiscordNickname = await user.getDiscordNickname() || "не записан";

  const userLastUsedCommandText = userLastUsedCommand ? `<t:${userLastUsedCommand}:R>` : "[никогда]";
  const userLastUsedSlashCommandText = userLastUsedSlashCommand ? `<t:${userLastUsedSlashCommand}:R>` : "[никогда]";

  return interaction.reply({
    content: stripIndents`
      Информация о пользователе с ID **\`${arguments[0] || interaction.user.id}\`**

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
  category: "info",
  enable: true
};