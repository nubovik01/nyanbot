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

// TODO: сделать публикацию slash-команд
// блять я ебал эти все application actions, commands и прочую хуйню, боже мой... в discord.js v14.8.0 сука один способ создавать команды, обновляюсь чуть выше на v14.10.2 - УЖЕ ДРУГОЙ И В ИТОГЕ НИХУЯ НЕ РАБОТАЕТ, СУКААААААА
require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on('ready', () => {
  console.log('\nLogged in as %s', client.user.tag);
});

client.application.commands.set([
  {
    name: 'test',
    description: 'huy test'
  }
]);

client.login(process.env.DISCORD_BOT_TOKEN);