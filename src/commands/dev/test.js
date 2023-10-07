module.exports.run = async (client, message, args) => {
  message.channel.send({ content: "тестики всякие блин ну вот да как бы...." });

  let test = client.commands.get('ping');
  console.log(test)
};

module.exports.help = {
  name: "test",
  examples: [
    "test"
  ],
  aliases: ['тест'],
  rights: [{
    onDiscord: [{
      bot: [],
      user: []
    }],
    onBot: [{
      user: [
        "DeveloperOfBot"
      ]
    }]
  }],
  category: "bot",
  enable: true
}