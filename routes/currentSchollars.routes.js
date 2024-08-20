import curentScholarControllers from "../controllers/currentScholars.ctrl.js";
import express from "express";
import adminMiddleware from "../middleware/adminMiddleware.js";

const router = express.Router();

router.route("/create").post(adminMiddleware, curentScholarControllers.create);
router.route("/all").get(curentScholarControllers.getAllData);
router.route("/get/:id").get(curentScholarControllers.getById);
router
  .route("/update/:id")
  .put(adminMiddleware, curentScholarControllers.updateById);
router
  .route("/delete/:id")
  .delete(adminMiddleware, curentScholarControllers.findAndDelete);
export default router;
