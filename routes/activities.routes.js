import express from "express";
import activityCtrl from "../controllers/activities.ctrl.js" ;
 
const router = express.Router();


router.post(
  "/:subfield_name/create",
  activityCtrl.trainingAndWorkshopImageUpload
);
router.get("/:subfield_name/getall", activityCtrl.getActivities);
router.get("/:subfield_name/:id", activityCtrl.getActivityById);
router.put(
  "/:subfield_name/update/:id",
  activityCtrl.updateActivity
);
router.delete("/:subfield_name/delete/:id", activityCtrl.deleteActivity);

export default router
