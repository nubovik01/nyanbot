const { ActivityType } = require('discord.js');
const { PRESENCE } = require('../../config.js');

module.exports.run = async (message, client) => {
  if(!PRESENCE.ENABLED) return console.log('Presence is disabled. You can turn on it in config.js.');

  await client.user.setPresence({
    activities: [{
      name: PRESENCE.MESSAGE,
      type: ActivityType[PRESENCE.TYPE],
    }],
    status: PRESENCE.STATUS
  });
};

module.exports.help = {
  name: "ready",
  enabled: true,
  once: true
}