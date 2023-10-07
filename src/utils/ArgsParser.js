module.exports = (cmd = "") => {
  if (cmd.indexOf(" ") === -1) return [];
  cmd = cmd.substring(cmd.indexOf(" ") + 1);
  let args = cmd.match(/("( *[^ "]* *)*")+|([^ "]+)+/gmiu);
  if (args == null) return [];
  for (let i = 0; i < args.length; i++) {
    args[i] = args[i].split("\"").join("");
  }
  return args;
}