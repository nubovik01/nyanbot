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

const { PREFIXES } = require('../../../config.js');

module.exports.run = async (client, message, args) => {
  if (!args[0]) return message.channel.send({ content: `Вы не указали какое действие требуется произвести с slash-командами. Пример использования команды: \`${PREFIXES.DEFAULT}help ${this.help.name}\`` });

  if (args[0] == "post") {
    client.application.commands.set([
      {
        name: 'test',
        description: 'Slash-команда для разработчиков бота. Используется для тестов.'
      },
      {
        name: 'help',
        description: 'Список команд бота.'
      },
      {
        name: 'ping',
        description: 'Получить текущую задержку бота, Discord API и Websocket.'
      },
      {
        name: 'pidoras',
        description: 'Бот напишет "пидорас ебаный" в отношении того, кого вы упомяните.',
        options: [
          {
            name: 'имя_человека',
            description: 'укажите имя человека, которого надо назвать пидорасом.',
            required: true,
            type: 3
          }
        ]
      },
      {
        name: 'eval',
        description: 'Slash-команда для разработчиков бота. Позволяет выполнить программный код.',
        options: [
          {
            name: 'программный_код',
            description: 'укажите код, который требуется выполнить.',
            required: true,
            type: 3
          }
        ]
      }
    ]);

    return message.channel.send({ content: "Slash-команды обновлены глобально." });
  };

  if (args[0] == "remove") {
    bot.application.commands.set([]);

    return message.channel.send({ content: "Slash-команды удалены глобально." });
  };
};

module.exports.help = {
  name: "slash",
  examples: [
    "slash post",
    "slash remove"
  ],
  aliases: ['globalslash', 'слэш'],
  category: "dev",
  enable: true
};