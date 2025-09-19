// External module
const express = require('express');
const storeRouter = express.Router();
// local module
const storeController = require('../controller/storeControllers');

storeRouter.get("/",storeController.getHomes);
storeRouter.get("/store/home-list",storeController.getHomesList);
storeRouter.get("/bookings",storeController.getBookings);

module.exports = storeRouter;