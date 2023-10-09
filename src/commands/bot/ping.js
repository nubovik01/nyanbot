module.exports.run = async (client, message, args) => {
  return message.channel.send({content: `Время задержки Discord API на этом шарде - ${client.ws.ping} мс, отправка сообщения заняла ${Date.now() - message.createdTimestamp} мс.`})
};

module.exports.help = {
  name: "ping",
  examples: [
    "ping"
  ],
  aliases: ['пинг', 'pong', 'понг', 'времяответа', 'pung', 'pibg', 'pinf', 'pugf'],
  rights: [{
    onDiscord: [{
      bot: [],
      user: []
    }],
    onBot: [{
      user: []
    }]
  }],
  category: "bot",
  enable: true
}