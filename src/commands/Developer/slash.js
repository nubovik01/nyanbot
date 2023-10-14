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
  // oh, look to this govnocode, lmao....

  if (!args[0]) return message.channel.send({ content: `Вы не указали какое действие требуется произвести с slash-командами. Пример использования команды: \`${PREFIXES.DEFAULT}help ${this.help.name}\`` });

  if (args[0] == "post") {
    client.application.commands.set([
      {
        name: 'test',
        description: 'Slash-команда для разработчиков бота. Используется для тестов.'
      },
      {
        name: 'help',
        description: 'Список команд бота.',
        options: [
          {
            name: 'команда',
            description: 'Получить справку по команде. К примеру, "ping".',
            required: false,
            type: 3
          }
        ]
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
            name: 'множественное_число',
            description: 'Хотите упомянуть нескольких людей? Да/нет',
            required: true,
            type: 5
          },
          {
            name: 'имя_человека',
            description: 'Упомянаемый человек, которого требуется назвать пидорасом.',
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
            name: 'код',
            description: 'Програмный код',
            required: true,
            type: 3
          }
        ]
      },
      {
        name: 'nsfw',
        description: 'NSFW-команды.',
        nsfw: true,
        options: [
          {
            name: 'anal',
            type: 1,
            description: 'Бот отправит NSFW фотографию или GIF с аналом',
          },
          {
            name: 'hanal',
            type: 1,
            description: 'Бот отправит NSFW фотографию или GIF с аналом из хентая',
          },
          {
            name: 'ass',
            type: 1,
            description: 'Бот отправит NSFW фотографию или GIF с женской жопой'
          },
          {
            name: 'hass',
            type: 1,
            description: 'Бот отправит NSFW фотографию или GIF с женской жопой из хентая'
          },
          {
            name: 'pussy',
            type: 1,
            description: 'Бот отправит NSFW фотографию или GIF с киской'
          },
          {
            name: 'boobs',
            type: 1,
            description: 'Бот отправит NSFW фотографию или GIF с сиськами'
          },
          {
            name: 'hboobs',
            type: 1,
            description: 'Бот отправит NSFW фотографию или GIF с сиськами из хентая'
          },
          {
            name: 'boobs2',
            type: 1,
            description: 'Бот отправит NSFW фотографию или GIF с сиськами с другого API'
          },
          {
            name: 'hentai',
            type: 1,
            description: 'Бот отправит NSFW фотографию или GIF с хентаем'
          },
          {
            name: 'hneko',
            type: 1,
            description: 'Бот отправит NSFW фотографию или GIF с кошкодевочкой из хентая'
          },
          {
            name: 'yaoi',
            type: 1,
            description: 'Бот отправит NSFW фотографию или GIF с яой'
          },
          {
            name: 'tentacle',
            type: 1,
            description: 'Бот отправит NSFW фотографию или GIF с тентаклями'
          }
        ]
      },
      {
        name: 'uptime',
        description: 'Получить точное время запуска бота.'
      },
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