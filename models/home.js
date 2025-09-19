// core modules
const fs = require('fs');
const path = require('path');
const rootDir = require('../utils/pathUtils');

module.exports = class Home {
  constructor(housename, pricePernight, location, ratings, image) {
    this.housename = housename;
    this.pricePernight = pricePernight;
    this.location = location;
    this.ratings = ratings;
    this.image = image;
  }

  save() {
    Home.fetchAll(registeredHouses => {
        registeredHouses.push(this);
        const filePath = path.join(rootDir, 'data', 'homes.json');
        fs.writeFile(filePath, JSON.stringify(registeredHouses), (err) => {
        console.log("File writing concluded.", err);
      });
    });
    
  }

  static fetchAll(callbck) {
    const filePath = path.join(rootDir, 'data', 'homes.json');
    fs.readFile(filePath, (err, fileContent) => {
      callbck(!err ? JSON.parse(fileContent) : []);
    });
  }
};