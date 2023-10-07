module.exports.run = async (client, message, args) => {
  return message.channel.send({ content: "Ой-ой! Мявк! Эта команда пока в разработке :(" });
};

module.exports.help = {
  name: "help",
  examples: [
    "help",
    "help ping"
  ],
  aliases: ['команды', 'commands'],
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
};