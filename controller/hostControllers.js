const Home = require("../models/home");

exports.getHostHomesList = (req,res,next)=>{
  Home.fetchAll(registeredHouses =>{
    res.render('admin/admin-home-list.ejs',{registeredHouses: registeredHouses, pageTitle: 'Airbnb Home-SR' });
  });
}

exports.getAddHome = (req,res,next)=>{  
  res.render('admin/edit-home.ejs',{pageTitle: 'Add Home',editing: false});
}

exports.getEditHome = (req,res,next)=>{  
  const editMode = req.query.editing === 'true';
  const homeId = req.params.id;
  Home.findById(homeId, home=>{
    if(!home){
      return res.redirect("/host-home-list");
    }
    res.render('admin/edit-home.ejs',{pageTitle: 'Edit Home', editing: editMode, home: home});
  });
}

exports.postAddHome = (req,res,next)=>{
  const { housename, pricePernight, location, ratings, image } = req.body;

  const home = new Home(housename, pricePernight, location, ratings, image);
  home.save();
  res.redirect('/host-home-list');
}

exports.postEditHome = (req,res,next)=>{
  const { id,housename, pricePernight, location, ratings, image } = req.body;

  const updatedHome = new Home(housename, pricePernight, location, ratings, image);
  updatedHome.id = id;
  updatedHome.save();
  res.redirect('/host-home-list');  
}

exports.postDeleteHome = (req,res,next)=>{
  const homeId = req.params.id;
  Home.deleteById(homeId,(err)=>{
    if(err){
      console.log("Error deleting home:", err);
    }
    res.redirect('/host-home-list');
  });
}
