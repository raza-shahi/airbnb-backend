// core modules
const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/pathUtils");

const favoritesPath = path.join(rootDir, "data", "favorites.json");

module.exports = class Favorites {
  static fetchFavorites(callback){
    fs.readFile(favoritesPath, (err, fileContent) =>{
      callback(!err ? JSON.parse(fileContent) : []);
    });
  }
  static addFavorite(homeId,callback){
    Favorites.fetchFavorites(favs =>{
      if(!favs.includes(homeId)){
        favs.push(homeId);
        fs.writeFile(favoritesPath, JSON.stringify(favs), err =>{
          console.log("Favorite added.", err);
          callback();
        });
      }else{
        console.log("Home already in favorites.");
        callback();
      }
    })
  }

  static removeFavorite(homeId, callback) {
    Favorites.fetchFavorites(favs => {
      const updatedFavs = favs.filter(id => id !== homeId);
      fs.writeFile(favoritesPath, JSON.stringify(updatedFavs), err => {
        console.log("Favorite removed.", err);
        callback();
      });
    });
  }
};
