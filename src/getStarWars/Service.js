
const starWarsNonDb = require('./db/starWarsNonDb');


module.exports = class {

  static async getStarWars(id) {
    console.log("inicio getStarWars "+ id);
    const litsModelStarWars = await starWarsNonDb.getStarWars(id);
    console.log("litsModelStarWars " + JSON.stringify(litsModelStarWars));
    return litsModelStarWars;
    console.log("fin getStarWars");
  }

  
};
