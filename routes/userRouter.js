// Core module
const path = require('path');
// External module
const express = require('express');
const rootDir = require('../utils/pathUtils');
const userRouter = express.Router();

userRouter.get("/",(req,res,next)=>{
  res.sendFile(path.join(rootDir,'views','home.html'));
});

module.exports = userRouter;