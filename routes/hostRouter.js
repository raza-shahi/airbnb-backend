// Core Module
const path = require('path');
// External module
const express = require('express');
const hostRouter = express.Router();

hostRouter.get("/host/add-home",(req,res,next)=>{  
  res.sendFile(path.join(__dirname,'../','views','addHome.html'));
});

hostRouter.post("/host/add-home",(req,res,next)=>{
  console.log(req.body);
  res.sendFile(path.join(__dirname,'../','views','homeAdded.html'));
});

module.exports = hostRouter;