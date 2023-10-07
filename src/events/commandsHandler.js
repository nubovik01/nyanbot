const argsSplit = require("../utils/ArgsParser.js");
const { PREFIX_COMMANDS } = require('@root/config.js');

module.exports.run = async (message, client) => {
  if (message.author.bot) return;
  if (message.channel.type !== 0) return;

  let prefix;
  if (process.env.DEBUG) {
    prefix = PREFIX_COMMANDS.DEFAULT_PREFIX;
  } else {
    prefix = PREFIX_COMMANDS.DEBUG_PREFIX;
  };

  if (!message.content.startsWith(prefix)) return;

  let args = argsSplit(message.content.slice(prefix.length).trim());
  let cmd = message.content.slice(prefix.length).trim().split(' ').shift().toLowerCase();
  let command;

  if (!cmd) return;

  if (client.commands.has(cmd)) {
    command = client.commands.get(cmd);
  } else if (client.commandsAliases.has(cmd)) {
    command = client.commands.get(client.commandsAliases.get(cmd))
  };

  if (command === undefined) return;

  if (command.help.enable == false && command.help.enable !== undefined) return message.channel.send({ content: `Эта команда отключена, ей воспользоваться не получится.` });

  message.channel.sendTyping().then(); // печатает...

  // TODO: сделать проверку прав
  /*
  if (command.help.rights) {
    for (const right of command.help.rights) {
    for (const onBot of right.onBot) {
      if (onBot.user.length > 0) {
      for (const right of onBot.user) {
        if (right == "DeveloperOfBot" && !message.author.id !== process.env.OWNER_ID) return message.channel.send({ content: `Эта команда доступна только разработчикам бота.` });
      };
      };
    };
  
    for (const onDiscord of right.onDiscord) {
      if (onDiscord.bot.length > 0) {
      for (const right of onDiscord.bot) {
        if (!message.guild.members.cache.get(bot.user.id).permissions.has([right])) return message.channel.send({ content: `У бота нет права \`${right}\`, командой воспользоваться не получится.` });
      };
      };
  
      if (onDiscord.user.length > 0) {
      for (const right of onDiscord.user) {
        if (!message.member.permissions.has(Discord.PermissionsBitField.Flags[right])) return message.channel.send({ content: `У Вас нет права \`${right}, командой воспользоваться не получится.\`` });
      };
      };
    };
    };
  };
  
  if (!message.channel.nsfw && command.help.category == "nsfw") return message.channel.send({ content: `Данная команда доступна только в NSFW-канале.` });
  */

  command.run(client, message, args).catch(e => console.error(`[!] Error while handling command \`${cmd}\`\n`, e));

  message.channel.sendTyping(); // Остановка печатания.
  return;
};

module.exports.help = {
  name: "messageCreate",
  enabled: true,
  once: false
}