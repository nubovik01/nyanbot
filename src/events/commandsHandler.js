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

const ArgsSplit = require("../utils/CommandsArgsParser.js");
const { PREFIXES, OWNER_IDS } = require('../../config.js');
const { AttachmentBuilder, PermissionsBitField } = require('discord.js');

module.exports.run = async (message, client) => {
  if (message.author.bot) return;
  if (message.channel.type !== 0) return;

  const prefix = PREFIXES.DEFAULT;

  if (!message.content.startsWith(prefix)) return;

  let args = ArgsSplit(message.content.slice(prefix.length).trim());
  let commandName = message.content.slice(prefix.length).trim().split(' ').shift().toLowerCase();
  let command;

  if (!commandName) return;

  if (client.commands.has(commandName)) {
    command = client.commands.get(commandName);
  } else if (client.commandsAliases.has(commandName)) {
    command = client.commands.get(client.commandsAliases.get(commandName))
  };

  if (command === undefined) return;

  if (command.help.enable == false || !command.help.enable) return message.channel.send({
    content: `Эта команда отключена, ей воспользоваться не получится.`
  });

  message.channel.sendTyping().then();

  for (const right of command.help.rights) {
    if (!message.guild.members.cache.get(client.user.id).permissions.has(right)) return message.channel.send({
      content: `У бота нет права **${right}**, требующегося для полноценной функциональности бота. Пожалуйста, выдайте данное право боту в настройках ролей, либо попросите администратора сервера это сделать.`
    });

    if (!message.member.permissions.has(PermissionsBitField.Flags[right])) return message.channel.send({
      content: `У вас нет права **${right}**, необходимого для использования этой команды.`
    });
  };

  if (command.help.category == "dev" && !OWNER_IDS.includes(message.author.id)) return message.channel.send({
    content: "Извините, данная команда доступна только разработчикам бота.",
    files: [new AttachmentBuilder('./assets/gifs/haram.gif', 'haram.gif')]
  });

  if (command.help.category == "nsfw" && !message.channel.nsfw) return message.channel.send({
    content: `Данная команда доступна только в NSFW-канале.`,
    files: [new AttachmentBuilder('./assets/gifs/haram.gif', 'haram.gif')]
  });

  try {
    await command.run(client, message, args);
  } catch (error) {
    console.error(error);
    return message.channel.send({ content: "Произошла непредвиденная ошибка! Попробуйте ещё раз." });
  };

  message.channel.sendTyping();
  return;
};

module.exports.help = {
  name: "messageCreate",
  enabled: true,
  once: false
};