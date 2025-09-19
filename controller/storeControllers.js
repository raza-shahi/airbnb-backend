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
