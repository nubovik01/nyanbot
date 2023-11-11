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

const { PREFIXES, BOT_NAME } = require('../../../config.js');

module.exports.run = async (client, message, args) => {
  if (!args[0]) return message.channel.send({
    content: `Вы не указали какое действие требуется произвести с slash-командами. Пример использования команды: \`${PREFIXES.DEFAULT}help ${this.help.name}\``
  });

  if (args[0] == "post") {
    client.application.commands.set([
      {
        name: 'test',
        description: 'Slash-команда для разработчиков бота. Используется для тестов.'
      },
      {
        name: 'omyum',
        description: 'Скидывает картинку с милым амнямом'
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
        name: 'whitelist',
        description: 'Проверить, находится ли сервер или пользователь в белом списке ' + BOT_NAME,
        options: [
          {
            name: 'id-сервера',
            description: 'Укажите ID сервера, информацию по которому требуется узнать',
            required: false,
            type: 3
          },
          {
            name: 'id-пользователя',
            description: 'Укажите ID пользователя, информацию по которому требуется узнать',
            required: false,
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
        name: 'animals',
        description: 'Команды с картинками или GIF животных',
        options: [
          {
            name: 'httpcat',
            type: 1,
            description: 'Картинка с котиком и случайным http кодом ошибки',
            options: [
              {
                name: 'код',
                description: 'Вы можете указать свой http код ошибки. К примеру, 404.',
                required: false,
                type: 3
              }
            ]
          },
          {
            name: 'catsays',
            type: 1,
            description: 'Отправит картинку с котиком и с вашей надписью',
            options: [
              {
                name: 'надпись',
                description: 'Текст, который будет наложен на картинку',
                required: true,
                type: 3
              }
            ]
          },
          {
            name: 'bunny',
            type: 1,
            description: 'Картинка или GIF с случайным кроликом',
          },
          {
            name: 'dog',
            type: 1,
            description: 'Картинка или GIF с случайной собакой',
          },
          {
            name: 'duck',
            type: 1,
            description: 'Картинка или GIF с случайной уткой',
          },
          {
            name: 'lizard',
            type: 1,
            description: 'Картинка или GIF с случайной змеёй',
          }
        ]
      },
      {
        name: 'uptime',
        description: 'Получить точное время запуска бота.'
      },
      {
        name: 'version',
        description: 'Получить текущую версию бота, node.js и discord.js.'
      },
    ]);

    return message.channel.send({ content: "Slash-команды обновлены глобально." });
  };

  if (args[0] == "remove") {
    bot.application.commands.set([]);

    return message.channel.send({ content: "Slash-команды удалены глобально." });
  };

  return message.channel.send({ content: `Пример использования команды: \`${PREFIXES.DEFAULT}help ${this.help.name}\`` });
};

module.exports.help = {
  name: "slash",
  examples: [
    "slash post",
    "slash remove"
  ],
  aliases: ['globalslash', 'слэш'],
  rights: [],
  category: "dev",
  enable: true
};