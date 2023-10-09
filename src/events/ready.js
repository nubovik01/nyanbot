module.exports.run = async (message, client) => {
  console.log('Logged in as %s', client.user.tag);
};

module.exports.help = {
  name: "ready",
  enabled: true,
  once: true
}