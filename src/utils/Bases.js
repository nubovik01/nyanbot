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

const Pool = require("pg").Pool;
const Cache = require("rgcache").Cache;
const ResponseParser = require('./BasesResponseParser.js');
const User = require("./BasesUser.js");

class BaseConnection {
  static instance = new BaseConnection();
  #pool = Pool.prototype;
  #usersCache = new Cache({
    ttl: 10,
    loader: this._fetchUser,
    loadStrategy: "one",
    thisArg: this
  });

  constructor() {
    this.#pool = new Pool({
      connectionString: process.env.DB,
      ssl: {
        rejectUnauthorized: false
      },
      max: 5
    });
  };

  async query(query, argument = []) {
    try {
      return await this.#pool.query(query, argument);
    } catch (error) {
      console.error(error);
    };
  };

  getCacheStats() {
    return this.#usersCache.stats();
  };

  async _fetchUser(id) {
    let con = await this.#pool.connect();
    let result = await con.query("SELECT * FROM users WHERE id = $1 LIMIT 1;", [id.toString()]);
    let user;
    if (result.rowCount < 1) {
      try {
        await con.query("INSERT INTO users (id) values ($1);", [id.toString()]);
      } catch (error) {
        console.error("Two or more database queries occurred synchronously! (js lore)");
      };
      user = ResponseParser.parse(User.prototype, (await con.query("SELECT * FROM users WHERE id = $1 LIMIT 1;", [id.toString()])).rows[0]);
    } else {
      user = ResponseParser.parse(User.prototype, result.rows[0]);
    };
    con.release();
    return user;
  };

  async getUser(id) {
    return await this.#usersCache.get(id);
  };

  async getSize(name) {
    let result = await this.query(`SELECT pg_size_pretty( pg_total_relation_size( '${name}' ) );`);
    return result.rows[0];
  };

  async getUsersCount() {
    let result = await this.query("SELECT count(id) FROM users");
    return result.rows[0].count;
  };

  async getPing() {
    let timestamp = Date.now();
    let result = await this.query("SELECT CURRENT_TIMESTAMP;");
    return result.rows[0].current_timestamp.getTime() - timestamp;
  };
}

module.exports = BaseConnection;