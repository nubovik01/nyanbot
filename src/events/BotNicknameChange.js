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

const { version } = require('../../package.json');
const {
  VERSION_MANAGEMENT_SYMBOL, SUPPORT_SERVER,
  BOT_NAME, CHANGE_NICKNAME_ON_SUPPORT_SERVER
} = require('../../config.js');

module.exports.run = async (message, client) => {
  if (!CHANGE_NICKNAME_ON_SUPPORT_SERVER) return console.log(
    'Nickname changing is disabled on the main Discord-server.'
  );

  const guild = client.guilds.cache.get(SUPPORT_SERVER.ID);

  guild.members.cache.get(client.user.id).setNickname(`${BOT_NAME} (v${version}${VERSION_MANAGEMENT_SYMBOL})`);

  console.log('Nickname of bot on main Discord-server has been changed.');
};

module.exports.help = {
  name: "ready",
  enabled: true,
  once: true
};