module.exports.run = async (message, client) => {
  // todo: сделать чтобы статус был как в @root/config.js
  client.user.setPresence({ activities: [{ name: 'soon...' }] });

  console.log('\nLogged in as %s', client.user.tag);
};

module.exports.help = {
  name: "ready",
  enabled: true,
  once: true
}