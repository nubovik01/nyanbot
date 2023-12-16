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

module.exports.run = async (client, message, db, args) => {
  if (!args[0]) return message.channel.send({
    content: `Вы не указали какое действие требуется произвести с slash-командами. Пример использования команды: \`${PREFIXES.DEFAULT}help ${this.help.name}\``
  });

  if (["post", "update", "обновить", "опубликовать"].includes(args[0])) {
    client.application.commands.set([
      {
        name: 'test',
        description: 'Slash-команда для разработчиков бота. Используется для тестов.'
      },
      {
        name: 'omyum',
        description: 'Скидывает в текущий чат картинку с милым амнямом.'
      },
      {
        name: 'help',
        description: 'Полный список slash-команд бота.',
        options: [
          {
            name: 'команда',
            description: 'Команда, по которой требуется получить справку. К примеру, "ping".',
            required: false,
            type: 3
          }
        ]
      },
      {
        name: 'ping',
        description: 'Получить текущую задержку базы данных, Discord API и Websocket.'
      },
      {
        name: 'pidoras',
        description: 'Бот назовёт пидорасом указанного пользователя или человека.',
        options: [
          {
            name: 'множественное_число',
            description: 'Хотите упомянуть нескольких человек? Да/нет',
            required: true,
            type: 5
          },
          {
            name: 'имя_человека',
            description: 'Целевой участник (требуется указать имя или упоминание)',
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
        description: 'Проверяет, находится ли сервер или пользователь в белом списке ' + BOT_NAME,
        options: [
          {
            name: 'id-сервера',
            description: 'Укажите ID сервера, информацию по которому нужно узнать (-s — для текущего).',
            required: false,
            type: 3
          },
          {
            name: 'участник',
            description: 'Упомяните или укажите ID пользователя, информацию по которому требуется узнать',
            required: false,
            type: 6
          }
        ]
      },
      {
        name: 'statistic',
        description: 'Получить некоторую информацию и статистику о определённом пользователе из БД.',
        options: [
          {
            name: 'участник',
            description: 'Упомяните или укажите ID пользователя, информацию по которому требуется узнать',
            required: false,
            type: 6
          }
        ]
      },
      {
        name: 'balance',
        description: 'Узнать баланс определенного пользователя в боте.',
        options: [
          {
            name: 'участник',
            description: 'Упомяните или укажите ID пользователя, информацию по которому требуется узнать',
            required: false,
            type: 6
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
            description: 'Бот отправит NSFW фотографию или GIF с аналом в текущий чат',
          },
          {
            name: 'hanal',
            type: 1,
            description: 'Бот отправит NSFW фотографию или GIF с аналом из хентая в текущий чат',
          },
          {
            name: 'ass',
            type: 1,
            description: 'Бот отправит NSFW фотографию или GIF с женской жопой в текущий чат'
          },
          {
            name: 'hass',
            type: 1,
            description: 'Бот отправит NSFW фотографию или GIF с женской жопой из хентая в текущий чат'
          },
          {
            name: 'pussy',
            type: 1,
            description: 'Бот отправит NSFW фотографию или GIF с киской в текущий чат'
          },
          {
            name: 'boobs',
            type: 1,
            description: 'Бот отправит NSFW фотографию или GIF с сиськами в текущий чат'
          },
          {
            name: 'hboobs',
            type: 1,
            description: 'Бот отправит NSFW фотографию или GIF с сиськами из хентая в текущий чат'
          },
          {
            name: 'boobs2',
            type: 1,
            description: 'Бот отправит NSFW фотографию или GIF с сиськами с другого API в текущий чат'
          },
          {
            name: 'hentai',
            type: 1,
            description: 'Бот отправит NSFW фотографию или GIF с хентаем в текущий чат'
          },
          {
            name: 'hneko',
            type: 1,
            description: 'Бот отправит NSFW фотографию или GIF с кошкодевочкой из хентая в текущий чат'
          },
          {
            name: 'yaoi',
            type: 1,
            description: 'Бот отправит NSFW фотографию или GIF с яой в текущий чат'
          },
          {
            name: 'tentacle',
            type: 1,
            description: 'Бот отправит NSFW фотографию или GIF с тентаклями в текущий чат'
          }
        ]
      },
      {
        name: 'animals',
        description: 'Команды с картинками или GIF с различными животными.',
        options: [
          {
            name: 'httpcat',
            type: 1,
            description: 'Бот скинет в текущий чат картинку с котиком и случайным HTTP кодом ошибки.',
            options: [
              {
                name: 'код',
                description: 'Укажите свой HTTP код ошибки. К примеру, 404.',
                required: false,
                type: 3
              }
            ]
          },
          {
            name: 'catsays',
            type: 1,
            description: 'Отправить в чат картинку с случайным котиком и Вашей надписью.',
            options: [
              {
                name: 'надпись',
                description: 'Текст, который требуется наложить на картинку',
                required: true,
                type: 3
              }
            ]
          },
          {
            name: 'bunny',
            type: 1,
            description: 'Бот скинет в текущий чат картинку или GIF с случайным кроликом.',
          },
          {
            name: 'dog',
            type: 1,
            description: 'Бот скинет в текущий чат картинку или GIF с случайной собакой.',
          },
          {
            name: 'duck',
            type: 1,
            description: 'Бот скинет в текущий чат картинку или GIF с случайной уткой.',
          },
          {
            name: 'lizard',
            type: 1,
            description: 'Бот скинет в текущий чат картинку или GIF с случайной змеёй.',
          }
        ]
      },
      {
        name: 'uptime',
        description: 'Позволяет узнать точную дату и время последнего запуска бота.'
      },
      {
        name: 'version',
        description: `Получить текущую версию ${BOT_NAME}, PostgreSQL и discord.js.`
      },
      {
        name: 'source',
        description: `Получить ссылку на открытый исходный код ${BOT_NAME} на GitHub`
      },
      {
        name: 'botinfo',
        description: `Получить актуальную информацию о боте`
      },
    ]);

    return message.channel.send({ content: "Slash-команды обновлены глобально." });
  };

  if (["remove", "удалить"].includes(args[0])) {
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