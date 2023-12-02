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

module.exports = class User {
  _id;
  _xp;
  _coins;
  _commandsUsages;
  _dateOfLastUsedCommand;
  _slashCommandsUsages;
  _dateOfLastUsedSlashCommand;
  _developer;
  _discordNickname;

  /*
  getValue(field) {
    return this["_"+field];
  };

  async update(field, value) {
    const Bases = await require('./Bases.js').instance;

    await require('./Bases.js').instance.query(`UPDATE users SET "${field}" = $1 WHERE id = $2;`, [Number.parseInt(value), this._id]);

    this["_"+field] = Number.parseInt(value);
  };

  async increase(field, value) {
    const Bases = await require('./Bases.js').instance;

    const newValue = this["_"+field] + Number.parseInt(value);

    if(isNaN(value) || !Number(value)) throw new Error("The value must be a number.");

    await require('./Bases.js').instance.query(`UPDATE users SET "${field}" = $1 WHERE id = $2;`, [newValue, this._id]);

    this["_"+field] = newValue;
  };

  async reduse(field, value) {
    const Bases = await require('./Bases.js').instance;

    const newValue = this["_"+field] - Number.parseInt(value);

    if(isNaN(value) || !Number(value)) throw new Error("The value must be a number.");

    await require('./Bases.js').instance.query(`UPDATE users SET "${field}" = $1 WHERE id = $2;`, [newValue, this._id]);

    this["_"+field] = newValue;
  };
  */

  async getXp() {
    return this._xp;
  };

  async setXp(value) {
    await require('./Bases.js').instance.query("UPDATE users SET \"xp\" = $1 WHERE id = $2;", [value, this._id]);
    this._xp = value;
  };

  async getCoins() {
    return this._coins;
  };

  async setCoins(value) {
    await require('./Bases.js').instance.query("UPDATE users SET \"coins\" = $1 WHERE id = $2;", [value, this._id]);
    this._coins = value;
  };

  async getCommandsUsages() {
    return this._commandsUsages;
  };

  async updateCommandsUsages(value) {
    const newValue = this._commandsUsages + Number.parseInt(value);
    await require('./Bases.js').instance.query("UPDATE users SET \"commandsUsages\" = $1 WHERE id = $2;", [newValue, this._id]);
    this._commandsUsages = newValue;
  };

  async getDateOfLastUsedCommand() {
    return this._dateOfLastUsedCommand;
  };

  async setDateOfLastUsedCommand(value) {
    const newValue = Number.parseInt(value);
    await require('./Bases.js').instance.query("UPDATE users SET \"dateOfLastUsedCommand\" = $1 WHERE id = $2;", [newValue, this._id]);
    this._dateOfLastUsedCommand = newValue;
  };

  async getSlashCommandsUsages() {
    return this._slashCommandsUsages;
  };

  async updateSlashCommandsUsages(value) {
    const newValue = this._slashCommandsUsages + Number.parseInt(value);
    await require('./Bases.js').instance.query("UPDATE users SET \"slashCommandsUsages\" = $1 WHERE id = $2;", [newValue, this._id]);
    this._slashCommandsUsages = newValue;
  };

  async getDateOfLastUsedSlashCommand() {
    return this._dateOfLastUsedSlashCommand;
  };

  async setDateOfLastUsedSlashCommand(value) {
    const newValue = Number.parseInt(value);
    await require('./Bases.js').instance.query("UPDATE users SET \"dateOfLastUsedSlashCommand\" = $1 WHERE id = $2;", [newValue, this._id]);
    this._dateOfLastUsedSlashCommand = newValue;
  };

  async isDeveloper() {
    return this._developer;
  };

  async changeDeveloper(value) {
    if(![true, false].includes(value)) throw new Error("The value must contain \"true\" or \"false\"");
 
    await require('./Bases.js').instance.query("UPDATE users SET \"developer\" = $1 WHERE id = $2;", [value, this._id]);
    this._developer = value;
  };

  async getDiscordNickname() {
    return this._discordNickname;
  };

  async setDiscordNickname(value) {
    await require('./Bases.js').instance.query("UPDATE users SET \"discordNickname\" = $1 WHERE id = $2;", [value, this._id]);
  };
};