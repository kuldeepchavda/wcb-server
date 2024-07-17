import curentScholarControllers from "../controllers/currentScholars.ctrl.js"
import express from "express"
const router = express.Router()
import multer from 'multer';
const storage = multer.memoryStorage();
const upload = multer({ storage });


router
  .route("/create")
  .post(upload.single("image"), curentScholarControllers.create);
router
  .route("/all")
  .get(curentScholarControllers.getAllData);
router.route("/get/:id").get(curentScholarControllers.getById)
router
  .route("/update/:id")
  .put(upload.single("image"), curentScholarControllers.updateById);
router
  .route("/delete/:id")
  .delete( curentScholarControllers.findAndDelete);
export default router