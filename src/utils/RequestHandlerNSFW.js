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

// thx https://t.me/tailsjs for partial help with the code <3

getImageOnNekobot = async function (type) {
  const body = await fetch("https://nekobot.xyz/api/image?type=" + type);
  return await (await body.json()).message;
};

getImageOnOboobs = async function () {
  const objectId = [Math.floor(Math.random() * 10930)];
  const body = await fetch("http://api.oboobs.ru/boobs/" + objectId);
  return "http://media.oboobs.ru/" + await (await body.json())[0].preview;
};

getImageOnNekos = async function () {
  const body = await fetch("https://nekos.life/api/v2/img/" + type);
  return await (await body.json()).message;
};

const PORN_TYPES = {
  'anal': () => getImageOnNekobot("anal"),
  'hanal': () => getImageOnNekobot("hanal"),
  'fourk': () => getImageOnNekobot("fourk"),
  'ass': () => getImageOnNekobot("ass"),
  'gonewild': () => getImageOnNekobot("gonewild"),
  'pgif': () => getImageOnNekobot("pgif"),
  'pussy': () => getImageOnNekobot("pussy"),
  'thigh': () => getImageOnNekobot("thigh"),
  'hthigh': () => getImageOnNekobot("hthigh"),
  'boobs': () => getImageOnNekobot("boobs"),
  'hboobs': () => getImageOnNekobot("hboobs"),
  'boobs2': () => getImageOnOboobs(),
  'hentaiass': () => getImageOnNekobot("hentaiass"),
  'hentai': () => getImageOnNekobot("hentai"),
  'hmidriff': () => getImageOnNekobot("hmidriff"),
  'hass': () => getImageOnNekobot("hass"),
  'holo': () => getImageOnNekobot("holo"),
  'neko': () => getImageOnNekobot("neko"),
  'hneko': () => getImageOnNekobot("hneko"),
  'hkitsune': () => getImageOnNekobot("hkitsune"),
  'kemonomimi': () => getImageOnNekobot("kemonomimi"),
  'kanna': () => getImageOnNekobot("kanna"),
  'gah': () => getImageOnNekobot("gah"),
  'coffee': () => getImageOnNekobot("coffee"),
  'food': () => getImageOnNekobot("food"),
  'paizuri': () => getImageOnNekobot("paizuri"),
  'tentacle': () => getImageOnNekobot("tentacle"),
  'yaoi': () => getImageOnNekobot("yaoi"),
  'erokemo': () => getImageOnNekos("erokemo"),
  'kitsune': () => getImageOnNekos("kitsune"),
  'lewd': () => getImageOnNekos("lewd"),
  'nekofeet': () => getImageOnNekos("nekofeet"),
  'nekopussy': () => getImageOnNekos("nekopussy"),
  'nekotits': () => getImageOnNekos("tits"),
  'solo': () => getImageOnNekos("solo"),
  'wallpaper': () => getImageOnNekos("wallpaper"),
};

module.exports.porn = PORN_TYPES;