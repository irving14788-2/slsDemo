
const AWS = require('aws-sdk');


const dynamoDb = new AWS.DynamoDB.DocumentClient();

const TRANSACTION_MAX_LENGTH = 10;

class DynamoDBConnection {
  static async callSingleOperation(action, params) {
    try {
      return await dynamoDb[action](params).promise();
    } catch (error) {
      console.error(error);
      throw new Error({
        code: "-1",
        messages: error.message,
      });
    }
  }
}


module.exports = DynamoDBConnection;
