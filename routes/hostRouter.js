const express = require('express');
const hostRouter = express.Router();

hostRouter.get("/host/add-home",(req,res,next)=>{  
  res.send(`
    <h1>Register your home</h1>
    <form action="/host/add-home" method="POST">
      <input type="text" placeholder="Enter your name" name="housename">
      <input type="submit"/>
    </form>
    `);
});

hostRouter.post("/host/add-home",(req,res,next)=>{
  console.log(req.body);
  res.send(`
    <h1>Your home registered successfuly </h1>
    <a href="/">Go to home</a>
    `);
});

module.exports = hostRouter;