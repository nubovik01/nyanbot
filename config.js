module.exports = {
  OWNER_IDS: ["454314234830913557", "754428134941655173"],
  SUPPORT_SERVER: "https://discord.gg/EJc8UC7yhZ",
  SUPPORT_SERVER_ID: "457858774099689479",
  BOT_NAME: "NyanBot",
  VERSION_MANAGEMENT_SYMBOL: "⌂",
  PREFIX_COMMANDS: {
    DEFAULT_PREFIX: "n.",
    DEBUG_PREFIX: "nn.",
    DEFAULT_PREFIX: !process.env.DEBUG ? "n." : "nn."
  },
  EMBED_COLORS: {
    BOT_EMBED: "#F5DE43",
    TRANSPARENT: "#36393F",
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