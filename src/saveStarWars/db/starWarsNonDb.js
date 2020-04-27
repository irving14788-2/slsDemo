
const DynamoDBConnection = require('../../commons/db/DynamoDBConnection');

class starWarsNonDb {

  static async regStarWars(objStarWars) {
    try {
      console.log("objStarWars " + JSON.stringify(objStarWars));
      const params = {
        TableName: process.env.TABLA_DDB_WARS,
        Item: objStarWars,
      };
      return await DynamoDBConnection.callSingleOperation('put', params);
    } catch (error) {
      throw new Error({
        code: "-1",
        messages: "Generic Error",
      });
    }
  }
  
}

module.exports = starWarsNonDb;
