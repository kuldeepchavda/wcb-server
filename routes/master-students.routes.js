import express from "express";
const router = express.Router();
import multer from "multer";
const storage = multer.memoryStorage();
const upload = multer({ storage });
import masterStudentsCtrl from "../controllers/master-students.ctrl.js";

router.route("/create").post(upload.single("image"), masterStudentsCtrl.create);
router.route("/all").get(masterStudentsCtrl.getAllData);
router.route("/get/:id").get(masterStudentsCtrl.getById);
router
  .route("/update/:id")
  .put(upload.single("image"), masterStudentsCtrl.updateById);
router.route("/delete/:id").delete(masterStudentsCtrl.findAndDelete);
export default router;
