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

module.exports = {
  OWNER_IDS: ["454314234830913557", "754428134941655173"],
  SUPPORT_SERVER: "https://discord.gg/EJc8UC7yhZ",
  SUPPORT_SERVER_ID: "457858774099689479",
  BOT_NAME: "NyanBot",
  VERSION_MANAGEMENT_SYMBOL: "⌂",
  PREFIXES: {
    DEFAULT: "n.",
    DEBUG: "nn.",
    DEFAULT: !process.env.DEBUG ? "n." : "nn."
  },
  EMBED_COLORS: {
    BOT_EMBED: "#F5DE43",
    SUCCESS: "#00A56A",
    ERROR: "#D61A3C",
    WARNING: "#F7E919",
  },
  PRESENCE: {
    ENABLED: true,
    STATUS: "idle", 
    TYPE: "Watching",
    MESSAGE: "Nothing to see yet.",
  }
};