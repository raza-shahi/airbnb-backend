const Home = require("../models/home");

exports.getAddHome = (req,res,next)=>{  
  res.render('admin/addHome.ejs',{pageTitle: 'Add Home'});
}

exports.postAddHome = (req,res,next)=>{
  const { housename, pricePernight, location, ratings, image } = req.body;

  const home = new Home(housename, pricePernight, location, ratings, image);
  home.save();

  res.render('admin/homeAdded.ejs',{pageTitle: 'Home Added Successfully'});
}

exports.getHostHomesList = (req,res,next)=>{
  Home.fetchAll(registeredHouses =>{
    res.render('admin/admin-home-list.ejs',{registeredHouses: registeredHouses, pageTitle: 'Airbnb Home-SR' });
  });
}