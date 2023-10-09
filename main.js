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

require('dotenv').config();
const { Client, GatewayIntentBits, Collection } = require('discord.js');
const fs = require('fs');

// TODO: подумать над интентами
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
client.slashCommandsAliases = new Collection();
client.events = new Collection();
// TODO: добавить кулдауны командам и slash-командам
// TODO: подключить postgresql к боту
// TODO: добавить боту локализацию, если потребуется
// TODO: что на счёт англоязычной аудитории?
// TODO: сделать команду uptime
// TODO: сделать команду botinfo

const commandsFolders = fs.readdirSync('./src/commands');
const slashCommandsFolders = fs.readdirSync('./src/commands_slash');

// Commands Loader
for (let folder of commandsFolders) {
  fs.readdir("./src/commands/" + folder, (err, files) => {
    if (err) console.warn(err);
    let jsfile = files.filter(f => f.split(".").pop() === "js");
    if (jsfile.length <= 0) return console.error("Not found be once commands :(");

    jsfile.forEach((f) => {
      let props = require(`./src/commands/${folder}/${f}`);

      client.commands.set(props.help.name, props);
      props.help.aliases.forEach(alias => {
        client.commandsAliases.set(alias, props.help.name);
      });

      console.info(`/commands/${folder}/${f} ✅`);

      // bc.bot.commands[`${props.help.category}`].push(props.help.name); // from FlameOut
    });
  });
};

// Slash-commands Loader
// TODO: сделать slash-команды
for (let folder of slashCommandsFolders) {
  fs.readdir("./src/commands_slash/" + folder, (err, files) => {
    if (err) console.warn(err);
    let jsfile = files.filter(f => f.split(".").pop() === "js");
    if (jsfile.length <= 0) return console.error("Not found be once application (/) commands :(");

    jsfile.forEach((f) => {
      let props = require(`./src/commands_slash/${folder}/${f}`);

      console.info(`/commands_slash/${folder}/${f} ✅`);

      client.slashCommands.set(props.help.name, props);
      props.help.aliases.forEach(alias => {
        client.slashCommandsAliases.set(alias, props.help.name);
        // TODO: ..можно делать алиасы слеш-командам? ну, ладно
      });
    });
  });
};

// Events Loader
fs.readdir("./src/events/", (err, files) => {
  if (err) console.warn(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if (jsfile.length <= 0) return console.error("Not found be once events");

  jsfile.forEach((f) => {
    let event = require(`./src/events/${f}`);

    if (event.help.enabled) {
      console.info(`/events/${f} ✅`);

      client.on(event.help.name, (...args) => event.run(...args, client));
    } else {
      console.info(`event ${f} is disabled.`);
    }
  });
});

client.login(process.env.DISCORD_BOT_TOKEN);