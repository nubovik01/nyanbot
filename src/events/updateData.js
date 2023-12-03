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

const Base = require('../utils/Bases.js');

module.exports.run = async (message, client) => {
  if (!'0', '2'.includes(message.channel.type) || message.author.bot) return;

  const db = new Base();
  const user = await db.getUser(message.author.id);
  const userDiscordNickname = await user.getDiscordNickname();

  const newNickname = (message.author.discriminator == 0) ? message.author.username : `${message.author.username}#${message.author.discriminator}`;

  if (userDiscordNickname == null || userDiscordNickname != newNickname) {
    await user.setDiscordNickname(newNickname);
  };

  return;
};

module.exports.help = {
  name: "messageCreate",
  enabled: true,
  once: false
};