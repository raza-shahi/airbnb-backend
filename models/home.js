// core modules
const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/pathUtils");

const filePath = path.join(rootDir, "data", "homes.json");

module.exports = class Home {
  constructor(housename, pricePernight, location, ratings, image) {
    this.housename = housename;
    this.pricePernight = pricePernight;
    this.location = location;
    this.ratings = ratings;
    this.image = image;
  }

  save() {
    Home.fetchAll((registeredHouses) => {
      if(this.id) {
      // Update existing Home
       registeredHouses = registeredHouses.map(home => home.id === this.id ? this : home);
      }else{
        // New Home
        const homeId = Math.random().toString();
        this.id = homeId; // Add ID to the object
        registeredHouses.push(this);
      }
      fs.writeFile(filePath, JSON.stringify(registeredHouses), (err) => {
        console.log("File writing concluded.", err);
      });
    });
  }

  static fetchAll(callbck) {
    fs.readFile(filePath, (err, fileContent) => {
      callbck(!err ? JSON.parse(fileContent) : []);
    });
  }

  static findById(homeId, callbck) {
    this.fetchAll(homes =>{
      const homeFound = homes.find(home => home.id === homeId);
      callbck(homeFound);
    });
  }

  static deleteById(homeId,callback){
    this.fetchAll(homes =>{
     const afterDeletedHomes = homes.filter(home => home.id !== homeId);
      fs.writeFile(filePath, JSON.stringify(afterDeletedHomes), (err) => {
        if(!err){
          callback();
        }
      });
    })
  }
};

