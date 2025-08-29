// Core module
const path = require('path');
// external module
const express = require('express');
// local module
const userRouter = require("./routes/userRouter");
const hostRouter = require("./routes/hostRouter");
const app = express();

app.use((req,res,next)=>{
  console.log(req.url,req.method);
  next();
});
app.use(express.urlencoded());

app.use(userRouter);
app.use(hostRouter);

app.use((req,res,next)=>{
  res.status(404).sendFile(path.join(__dirname,'../','views','404page.html'));
});
const PORT =3000;
app.listen(PORT,()=>{
    console.log(`Server is running on port http://localhost:${PORT}`);
});