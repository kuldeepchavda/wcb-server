import express from "express";
const router = express.Router();
import whatWeDoController from "../controllers/home.ctrl.js"
import adminMiddleware from "../middleware/adminMiddleware.js";

router.post("/create",adminMiddleware, whatWeDoController.create);
router.get("/getall", whatWeDoController.getAll);
router.get("/get/:id", whatWeDoController.getById);
router.put("/update/:id",adminMiddleware, whatWeDoController.update);
router.put(
  "/update/item/:entryId/:itemId",adminMiddleware,
  whatWeDoController.updateActivityById
);
router.delete("/delete/:id",adminMiddleware, whatWeDoController.deleteData);
export default router
