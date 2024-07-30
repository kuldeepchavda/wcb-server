import curentScholarControllers from "../controllers/currentScholars.ctrl.js"
import express from "express"
const router = express.Router()

router
  .route("/create")
  .post(curentScholarControllers.create);
router
  .route("/all")
  .get(curentScholarControllers.getAllData);
router.route("/get/:id").get(curentScholarControllers.getById)
router
  .route("/update/:id")
  .put(curentScholarControllers.updateById);
router
  .route("/delete/:id")
  .delete( curentScholarControllers.findAndDelete);
export default router