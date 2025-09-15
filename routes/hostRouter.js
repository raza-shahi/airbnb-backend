// Core Module
const path = require('path');
// External module
const express = require('express');
// local module
const rootDir = require('../utils/pathUtils');

const hostRouter = express.Router();

hostRouter.get("/host/add-home",(req,res,next)=>{  
  res.render('addHome.ejs',{pageTitle: 'Add Home'});
});

const registeredHouses = [];

hostRouter.post("/host/add-home",(req,res,next)=>{
  console.log("Home register for ",req.body.housename);
  registeredHouses.push({houseName: req.body.housename})

  res.render('homeAdded.ejs',{pageTitle: 'Home Added Successfully'});
});

exports.hostRouter = hostRouter;
exports.registeredHouses = registeredHouses;