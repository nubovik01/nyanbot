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
}