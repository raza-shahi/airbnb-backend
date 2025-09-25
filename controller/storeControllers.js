const Favorites = require("../models/favorites");
const Home = require("../models/home");

exports.getHomes = (req,res,next)=>{
  Home.fetchAll(registeredHouses =>{
    res.render('store/index.ejs',{registeredHouses: registeredHouses, pageTitle: 'Airbnb Home-SR' });
  });
}

exports.getHomesList = (req,res,next)=>{
  Home.fetchAll(registeredHouses =>{
    res.render('store/home-list.ejs',{registeredHouses: registeredHouses, pageTitle: 'Airbnb Home-SR' });
  });
}
exports.getBookings = (req,res,next)=>{
  res.render('store/bookings.ejs',{pageTitle: 'Airbnb Bookings' });
  // Home.fetchAll(registeredHouses =>{
  //   res.render('store/bookings.ejs',{registeredHouses: registeredHouses, pageTitle: 'Airbnb Bookings' });
  // });
}


exports.getHomeDetails = (req,res,next)=>{
  const homeId = req.params.homeId;
  console.log("in home details",homeId);
  Home.findById(homeId, homeFound =>{
    if(!homeFound){
      res.redirect('/');  // Changed to redirect to home page
    }else{
      res.render('store/home-details.ejs',{pageTitle: 'Home Details', home: homeFound });
    }
  })
}

exports.getFavorites = (req, res, next) => {
  Favorites.fetchFavorites((favIds) => {
    Home.fetchAll((registeredHouses) => {
      const favoriteHomes = registeredHouses.filter(home => favIds.includes(home.id));
      res.render("store/favorites-list.ejs", {
        favoriteHomes: favoriteHomes,
        pageTitle: "Your Favorites",
      });
    });
  });
};

exports.postFavorites = (req, res, next) =>{
  const homeId = req.body.homeId;
  console.log("Adding to favorites:", homeId);
  // Logic to add the home to the user's favorites
  Favorites.addFavorite(homeId,(err)=>{
    if(err){
      console.log("Error adding favorite:", err);
    }
    res.redirect('/store/favorites'); // This should now work with the routes above
  });
}

exports.postRemoveFavorite = (req,res, next) =>{
  const homeId = req.body.homeId;
  console.log("Removing from favorites:", homeId);
  Favorites.removeFavorite(homeId, (err) => {
    if (err) {
      console.log("Error removing favorite:", err);
    }
    res.redirect('/store/favorites');
  });
}