import express from "express";
const router = express.Router();
import whatWeDoController from "../controllers/home.ctrl.js"
router.post("/create", whatWeDoController.create);
router.get("/getall", whatWeDoController.getAll);
router.get("/get/:id", whatWeDoController.getById);
router.put("/update/:id", whatWeDoController.update);
router.put(
  "/update/item/:entryId/:itemId",
  whatWeDoController.updateActivityById
);
router.delete("/delete/:id", whatWeDoController.deleteData);
export default router
