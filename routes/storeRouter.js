// External module
const express = require('express');
const storeRouter = express.Router();
// local module
const storeController = require('../controller/storeControllers');

storeRouter.get("/",storeController.getHomes);
storeRouter.get("/store/home-list",storeController.getHomesList);
storeRouter.get("/bookings",storeController.getBookings);
storeRouter.get("/store/favorites",storeController.getFavorites);

storeRouter.get("/homes/:homeId",storeController.getHomeDetails);
storeRouter.post("/store/add-to-favorites",storeController.postFavorites);
storeRouter.post("/store/remove-from-favorites", storeController.postRemoveFavorite);

module.exports = storeRouter;