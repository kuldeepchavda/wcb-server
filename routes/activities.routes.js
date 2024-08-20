import express from "express";
import activityCtrl from "../controllers/activities.ctrl.js";
import adminMiddleware from "../middleware/adminMiddleware.js";
const router = express.Router();

router.post(
  "/:subfield_name/create",
  adminMiddleware,
  activityCtrl.trainingAndWorkshopImageUpload
);
router.get(
  "/:subfield_name/getall",
  activityCtrl.getActivities
);
router.get(
  "/:subfield_name/:id",
  activityCtrl.getActivityById
);
router.put(
  "/:subfield_name/update/:id",
  adminMiddleware,
  activityCtrl.updateActivity
);
router.delete(
  "/:subfield_name/delete/:id",
  adminMiddleware,
  activityCtrl.deleteActivity
);

export default router;
