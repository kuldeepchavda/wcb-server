import express from "express"
const router = express.Router();
import multer from "multer";
import collaboratorCtrl from "../controllers/collaborators.ctrl.js";
const storage = multer.memoryStorage();
const upload = multer({ storage });
router.route("/getall").get(collaboratorCtrl.getAll)
router.get("/get/:id", collaboratorCtrl.getCollaboratorById);
router.post(
  "/create",
  upload.single("image"),
  collaboratorCtrl.createCollaborator
);

router.delete("/delete/:id", collaboratorCtrl.deleteCollaborator);

export default router

