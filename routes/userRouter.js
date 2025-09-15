// Core module
const path = require('path');
// External module
const express = require('express');
const userRouter = express.Router();
// local module
// const rootDir = require('../utils/pathUtils');
const { registeredHouses } = require('./hostRouter');

userRouter.get("/",(req,res,next)=>{
  console.log(registeredHouses)
  // res.sendFile(path.join(rootDir,'views','home.html'));
  res.render('home.ejs',{registeredHouses: registeredHouses,pageTitle: 'Airbnb Home-SR' });
});

module.exports = userRouter;