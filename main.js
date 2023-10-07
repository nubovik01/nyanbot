require('dotenv').config();
const { Client, GatewayIntentBits, Collection } = require('discord.js');
const fs = require('fs');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMessages, GatewayIntentBits.DirectMessages] });
client.commands = new Collection();
client.commandsAliases = new Collection();
client.slashCommands = new Collection();
client.slashCommandsAliases = new Collection();
client.events = new Collection();

const commandsFolders = fs.readdirSync('./src/commands');
const slashCommandsFolders = fs.readdirSync('./src/commands_slash');

// Commands Loader
for (let folder of commandsFolders) {
  fs.readdir("./src/commands/" + folder, (err, files) => {
    if (err) console.warn(err);
    let jsfile = files.filter(f => f.split(".").pop() === "js");
    if (jsfile.length <= 0) {
      return console.error("[!] Я не нашёл ни одной slash-команды :(");
    };

    jsfile.forEach((f) => {
      let props = require(`./src/commands/${folder}/${f}`);

      client.commands.set(props.help.name, props);
      props.help.aliases.forEach(alias => {
        client.commandsAliases.set(alias, props.help.name);
      });

      console.info(`[*] Команда ${folder}/${f} загружена.`);

      // bc.bot.commands[`${props.help.category}`].push(props.help.name);
    });
    console.info(`[*] Всего команд: ${client.commands.size} (алиасов: ${client.commandsAliases.size})`);
  });
};

// Slash-commands Loader
for (let folder of slashCommandsFolders) {
  fs.readdir("./src/commands_slash/" + folder, (err, files) => {
    if (err) console.warn(err);
    let jsfile = files.filter(f => f.split(".").pop() === "js");
    if (jsfile.length <= 0) {
      return console.error("[!] Я не нашёл ни одну slash-команду :(");
    }

    jsfile.forEach((f) => {
      let props = require(`./src/commands_slash/${folder}/${f}`);

      console.info(`[*] Slash-команда ${f} загружена.`);

      client.slashCommands.set(props.help.name, props);
      props.help.aliases.forEach(alias => {
        client.slashCommandsAliases.set(alias, props.help.name);
      });
    });
    console.info(`[*] Всего slash-команд: ${client.slashCommands.size}`);
  });
};

// Events Loader
fs.readdir("./src/events/", (err, files) => {
  if (err) console.warn(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if (jsfile.length <= 0) {
    return console.error("[!] Я не нашёл ни одного эвента :(");
  };

  jsfile.forEach((f) => {
    let event = require(`./src/events/${f}`);

    if (event.help.enabled) {
      console.info(`[*] Эвент ${f} загружен.`);

      client.on(event.help.name, (...args) => event.run(...args, client));
    } else {
      console.info(`[!] Эвент ${f} отключён, из-за чего не может быть включён.`);
    }
  });
  console.info(`[*] Всего эвентов: ${client.events.size}`);
});

client.login(process.env.DISCORD_BOT_TOKEN);