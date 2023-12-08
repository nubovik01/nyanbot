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

getImageOnHttpCat = async function (httpCode) {
  const httpCodes = [
    '100', '101', '102', '103', '200', '201', '202', '203', '204',
    '206', '207', '300', '301', '302', '303', '304', '305', '307',
    '308', '400', '401', '402', '403', '404', '405', '406', '407',
    '408', '409', '410', '411', '412', '413', '414', '415', '416',
    '417', '418', '420', '421', '422', '423', '424', '425', '426',
    '428', '429', '431', '444', '450', '451', '497', '498', '499',
    '500', '501', '502', '503', '504', '506', '507', '508', '509',
    '510', '511', '521', '522', '523', '525', '530', '599'
  ];

  const selectedCode = httpCodes.includes(httpCode) ? httpCode : httpCodes[Math.floor(Math.random() * httpCodes.length)];
  return "https://http.cat/" + selectedCode + ".jpg";
};

getRandomImageOfBunny = async function () {
  const body = await fetch("https://api.bunnies.io/v2/loop/random/?media=gif");
  return await (await body.json()).media.gif;
};

getRandomImageOfDog = async function () {
  const body = await fetch("https://random.dog/woof.json");
  return await (await body.json()).url;
};

getRandomImageOfDuck = async function () {
  const body = await fetch("https://random-d.uk/api/v1/random?type=png");
  return await (await body.json()).url;
};

getRandomImageOfLizard = async function () {
  const body = await fetch("https://nekos.life/api/lizard");
  return await (await body.json()).url;
};

const ANIMAL_TYPES = {
  'httpCat': (httpCode) => getImageOnHttpCat(httpCode),
  'bunny': () => getRandomImageOfBunny(),
  'dog': () => getRandomImageOfDog(),
  'duck': () => getRandomImageOfDuck(),
  'lizard': () => getRandomImageOfLizard(),
  'catsays': (text) => `https://cataas.com/cat/says/${text}.jpg`
};

module.exports.animals = ANIMAL_TYPES;