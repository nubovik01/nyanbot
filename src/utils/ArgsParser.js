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

module.exports = (cmd = "") => {
  if (cmd.indexOf(" ") === -1) return [];
  cmd = cmd.substring(cmd.indexOf(" ") + 1);
  let args = cmd.match(/("( *[^ "]* *)*")+|([^ "]+)+/gmiu);
  if (args == null) return [];
  for (let i = 0; i < args.length; i++) {
    args[i] = args[i].split("\"").join("");
  }
  return args;
};