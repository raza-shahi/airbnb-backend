// Core module
const path = require('path');
// external module
const express = require('express');
// local module
const storeRouter = require("./routes/storeRouter");
const {hostRouter }= require("./routes/hostRouter");
const rootDir = require('./utils/pathUtils');
const errorsController = require('./controller/errors');

const app = express();

app.set('view engine','ejs');
app.set('views','views');

app.use(express.static(path.join(rootDir,'public')));
app.use(express.urlencoded());

app.use(storeRouter);
app.use(hostRouter);

app.use(errorsController.get404);

const PORT =3000;
app.listen(PORT,()=>{
    console.log(`Server is running on port http://localhost:${PORT}`);
});