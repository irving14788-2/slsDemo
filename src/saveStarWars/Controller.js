const service = require('./Service');

exports.handler = async (event) => {
    var res ={
    "statusCode": 200
    }
    try {
      console.log('input', JSON.stringify(event));
      const result = await service.saveStarWars();
      console.log('result', JSON.stringify(result));
      
      res.body = JSON.stringify(result);      
    } catch (error) {
      console.log('Controller ERROR', error);
      res.body = JSON.stringify(error);
    }
    return res;

};
