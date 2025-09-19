// External module
const express = require('express');
// local module
const hostRouter = express.Router();
const hostController = require('../controller/hostControllers');

hostRouter.get("/host/add-home", hostController.getAddHome);
hostRouter.post("/host/add-home", hostController.postAddHome);
hostRouter.get("/host-home-list", hostController.getHostHomesList);

exports.hostRouter = hostRouter;