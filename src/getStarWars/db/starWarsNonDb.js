
const DynamoDBConnection = require('../../commons/db/DynamoDBConnection');

class starWarsNonDb {

  static async getStarWars(id) {
    console.log('inicio getStarWars');
    try {
      const params = {
        Key: {
          "Id": id
         }, 
        TableName: process.env.TABLA_DDB_WARS
      };
      return await DynamoDBConnection.callSingleOperation('get', params);
    } catch (error) {
      throw new Error({
        code: "-1",
        messages: "Generic Error",
      });
    }
  }  
}

module.exports = starWarsNonDb;
