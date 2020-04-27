const service = require('./Service');

module.exports = class {
  static async handler(event) {
    let newEvent = '';
    var res ={
      "statusCode": 200
      }
    try {
      console.log('input', JSON.stringify(event));
      const result = await service.getStarWars(event.pathParameters.id);
      res.body = JSON.stringify(result);        
    } catch (error) {
      console.log('Controller ERROR', error);
      res.body = JSON.stringify(error);        
    }
    return res;
  }
};
