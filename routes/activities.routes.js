import express from "express";
import multer from "multer";
import activityCtrl from "../controllers/activities.ctrl.js" ;

//  multer configs
const storage = multer.memoryStorage();
const upload = multer({ storage });
const router = express.Router();


router.post(
  "/:subfield_name/create",
  upload.array("image", 10),
  activityCtrl.trainingAndWorkshopImageUpload
);
router.get("/:subfield_name/getall", activityCtrl.getActivities);
router.get("/:subfield_name/:id", activityCtrl.getActivityById);
router.put(
  "/:subfield_name/update/:id",
  upload.array("image", 10),
  activityCtrl.updateActivity
);
router.delete("/:subfield_name/delete/:id", activityCtrl.deleteActivity);

export default router
