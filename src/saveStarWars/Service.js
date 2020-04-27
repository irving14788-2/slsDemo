
const starWarsNonDb = require('./db/starWarsNonDb');
const axios = require("axios");
const ModelStarWars = require('../commons/models/StarWars');

const getData = async url => {
  try {
    const response = await axios.get(url);
    const data = response.data;
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

module.exports = class {

  static async saveStarWars() {
    
      console.log("inicio saveStarWars");
      const body = await getData("https://swapi.py4e.com/api/");
      console.log("getData " + JSON.stringify(body));
      const modelStarWars = new ModelStarWars("STARWARS-"+Date.now(),body.films, body.people, body.planets,
          body.species, body.starships, body.vehicles);
      await starWarsNonDb.regStarWars(modelStarWars);
      console.log("fin saveStarWars ");
      const result = {"code": 0, "message": "exito"};
      return result;
      console.log("fin saveStarWars");    
    
  }
  
};
