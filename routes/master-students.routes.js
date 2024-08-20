import express from "express";
const router = express.Router();
import multer from "multer";
const storage = multer.memoryStorage();
const upload = multer({ storage });
import masterStudentsCtrl from "../controllers/master-students.ctrl.js";
import adminMiddleware from "../middleware/adminMiddleware.js";

router
  .route("/create")
  .post(adminMiddleware,upload.single("image"), masterStudentsCtrl.create);
router.route("/all").get(masterStudentsCtrl.getAllData);
router.route("/get/:id").get(masterStudentsCtrl.getById);
router
  .route("/update/:id")
  .put(adminMiddleware,upload.single("image"), masterStudentsCtrl.updateById);
router
  .route("/delete/:id")
  .delete(adminMiddleware,masterStudentsCtrl.findAndDelete);
export default router;
