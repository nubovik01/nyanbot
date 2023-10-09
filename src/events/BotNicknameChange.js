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

const package = require('../../package.json');
const { SUPPORT_SERVER_ID, BOT_NAME, VERSION_MANAGEMENT_SYMBOL } = require('../../config.js');

module.exports.run = async (message, client) => {
  const guild = client.guilds.cache.get(SUPPORT_SERVER_ID);

  guild.members.cache.get(client.user.id).setNickname(`${BOT_NAME} (v${package.version}${VERSION_MANAGEMENT_SYMBOL})`);

  console.log('Nickname of bot on main Discord-server has been changed.');
};

module.exports.help = {
  name: "ready",
  enabled: true,
  once: true
};