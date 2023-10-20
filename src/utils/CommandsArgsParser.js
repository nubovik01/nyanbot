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

module.exports = (command = "") => {
  if (command.indexOf(" ") === -1) return [];
  command = command.substring(command.indexOf(" ") + 1);
  const arguments = command.match(/("( *[^ "]* *)*")+|([^ "]+)+/gmiu);
  if (arguments == null) return [];
  return arguments.map(argument => argument.split("\"").join(""));
};