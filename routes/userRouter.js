const express = require('express');

const userRouter = express.Router();

userRouter.get("/",(req,res,next)=>{
  res.send(`
    <h1>Welcome to aribnb home page </h1>
    <a href="/host/add-home">Add home</a>
    `);
});

module.exports = userRouter;