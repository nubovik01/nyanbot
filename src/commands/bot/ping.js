module.exports.run = async (client, message, args) => {
  message.channel.send({ content: "Измеряю задержку... 🔎"}).then((msg) => {
    msg.edit({ content: `Время задержки Discord API на этом шарде - ${client.ws.ping} мс, изменение сообщения заняло ${Date.now() - message.createdTimestamp} мс, а отправка - ${Date.now() - msg.createdTimestamp} мс.`})
  });

  message.channel.send({content: `Время задержки Discord API на этом шарде - ${client.ws.ping} мс, отправка сообщения заняла ${Date.now() - message.createdTimestamp} мс.`})
};

module.exports.help = {
  name: "ping",
  examples: [
    "ping"
  ],
  aliases: ['пинг', 'pong', 'понг', 'времяответа', 'pung', 'pyng', 'pibg', 'pinf', 'pugf', 'пунг', 'плнг'],
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