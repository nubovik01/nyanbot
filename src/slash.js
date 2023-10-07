require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on('ready', () => {
  console.log('\nLogged in as %s', client.user.tag);
});

client.application.commands.set([
  {
    name: 'ping',
    description: 'Get latency of Discord API'
  }
]);

client.login(process.env.DISCORD_BOT_TOKEN);