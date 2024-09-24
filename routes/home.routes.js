import express from "express";
const router = express.Router();
import homeDataController from "../controllers/home.ctrl.js";
import adminMiddleware from "../middleware/adminMiddleware.js";

// Routes for HomeData CRUD operations
router.post("/create", adminMiddleware, homeDataController.createHomeData);
router.get("/getall", homeDataController.getAllHomeData);
router.get("/get/:id", homeDataController.getHomeDataById);
router.put("/update/:id", adminMiddleware, homeDataController.updateHomeData);
router.delete(
  "/delete/:id",
  adminMiddleware,
  homeDataController.deleteHomeData
);

// Routes for CRUD operations on items within the whatWeDo array
router.post(
  "/create/item/:id",
  adminMiddleware,
  homeDataController.addItemToHomeData
);
router.put(
  "/update/item/:id/:itemId",
  adminMiddleware,
  homeDataController.updateItemInHomeData
);
router.delete(
  "/delete/item/:id/:itemId",
  adminMiddleware,
  homeDataController.deleteItemFromHomeData
);

//operations for carousel 

router.post(
  "/create/carousel/:id",
  adminMiddleware,
  homeDataController.addImageToCarousel
);
router.put(
  "/update/carousel/:id/:imageId",
  adminMiddleware,
  homeDataController.updateImageInCarousel
);
router.delete(
  "/delete/carousel/:id/:imageId",
  adminMiddleware,
  homeDataController.deleteImageFromCarousel
);

export default router;
