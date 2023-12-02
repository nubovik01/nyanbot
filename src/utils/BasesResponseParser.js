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

// Code from FlameOut (https://github.com/nubovik01/flamebot)

module.exports = class ResponseParser {
  static parse(prototype, object) {
    let instance = new prototype.constructor();
    for (let key of Object.keys(instance)) {
      if (typeof instance[key] === "object") {
        if (Array.isArray(instance[key]) && instance[key].length === 0) {
          instance[key] = object[key] || object[key.substring(1)];
        } else if (Array.isArray(object[key])) {
          instance[key] = object[key].map(obj => this.parse(instance[key][0], obj));
        } else if (object[key] !== undefined) {
          instance[key] = this.parse(instance[key], object[key]);
        } else if (object[key.substring(1)] !== undefined) {
          instance[key] = this.parse(instance[key], object[key.substring(1)]);
        }
      } else if (object[key] !== undefined) {
        instance[key] = object[key];
      } else if (object[key.substring(1)] !== undefined) {
        instance[key] = object[key.substring(1)];
      }
    }
    return instance;
  }
};