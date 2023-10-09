const emojis = require('../../../emojis.js');

module.exports.run = async (client, message, args) => {
  return message.channel.send(`Измеряю задержку... ${emojis.DEFAULT.SEARCH_RIGHT}`).then((resultMessage) => {
    const ping = resultMessage.createdTimestamp - message.createdTimestamp;

    resultMessage.edit(`Время задержки Websocket — ${client.ws.ping} мс, отправка сообщения заняла ${Date.now() - message.createdTimestamp} мс, пинг бота — ${ping} мс.`)
  })
};

module.exports.help = {
  name: "ping",
  examples: [
    "ping"
  ],
  aliases: ['пинг', 'pong', 'понг', 'времяответа', 'pung', 'pibg', 'pinf', 'pugf'],
  category: "bot",
  enable: true
}