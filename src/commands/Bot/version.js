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

const { version, dependencies } = require('../../../package.json');
const { VERSION_MANAGEMENT_SYMBOL } = require('../../../config.js');
const emojis = require('../../../emojis.js');

module.exports.run = async (client, message, db, args) => {
  const botVersion = `${version}${VERSION_MANAGEMENT_SYMBOL}`;
  const discordJsVersion = dependencies['discord.js'].substring(1);

  return message.channel.send({
    content: `v${botVersion} ${emojis.DEFAULT.CAT} | ${process.version} ${emojis.CUSTOM.NODEJS} | v13.4 ${emojis.CUSTOM.POSTGRESQL} | v${discordJsVersion} ${emojis.CUSTOM.DISCORD}`
  });
};

module.exports.help = {
  name: "version",
  examples: [
    "version"
  ],
  aliases: ['версия'],
  rights: [],
  category: "info",
  enable: true
};