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

require('dotenv').config();
const { Client, GatewayIntentBits, Collection } = require('discord.js');
const fs = require('fs');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessages
  ]
});
client.commands = new Collection();
client.commandsAliases = new Collection();
client.slashCommands = new Collection();
client.events = new Collection();

const commandsFolders = fs.readdirSync('./src/commands');
const slashCommandsFolders = fs.readdirSync('./src/commands_slash');

process.on('unhandledRejection', error => console.error(error));

// Commands Loader
for (let folder of commandsFolders) {
  fs.readdir("./src/commands/" + folder, (error, files) => {
    if (error) console.warn(error);

    const file = files.filter(f => f.split(".").pop() === "js");
    if (file.length <= 0) return console.error("Not found be once commands in /%s/ :(", folder);

    file.forEach((fileName) => {
      const properties = require(`./src/commands/${folder}/${fileName}`);

      if (properties.help.enable) {
        client.commands.set(properties.help.name, properties);

        properties.help.aliases.forEach(alias => {
          client.commandsAliases.set(alias, properties.help.name);
        });

        console.log(`/commands/${folder}/${fileName} ✅`);
      } else {
        console.log(`/commands/${folder}/${fileName} ❌`);
      };
    });
  });
};

// Slash-commands Loader
for (let folder of slashCommandsFolders) {
  fs.readdir("./src/commands_slash/" + folder, (error, files) => {
    if (error) console.warn(error);

    const file = files.filter(f => f.split(".").pop() === "js");
    if (file.length <= 0) return console.error("Not found be once application (/) commands in /%s/ :(", folder);

    file.forEach((fileName) => {
      const properties = require(`./src/commands_slash/${folder}/${fileName}`);

      if (properties.help.enable) {
        client.slashCommands.set(properties.help.name, properties);

        console.log(`/commands_slash/${folder}/${fileName} ✅`);
      } else {
        console.log(`/commands_slash/${folder}/${fileName} ❌`);
      };
    });
  });
};

// Events Loader
fs.readdir("./src/events/", (error, files) => {
  if (error) console.warn(error);

  const file = files.filter(f => f.split(".").pop() === "js");
  if (file.length <= 0) return console.error("Not found be once events :(");

  file.forEach((fileName) => {
    const event = require(`./src/events/${fileName}`);

    if (event.help.enabled) {
      client.on(event.help.name, (...args) => event.run(...args, client));

      console.log(`/events/${fileName} ✅`);
    } else {
      console.log(`/events/${fileName} ❌`);
    };
  });
});

client.login(process.env.DISCORD_BOT_TOKEN);