import express from "express";
const router = express.Router();
import collaboratorCtrl from "../controllers/collaborators.ctrl.js";
router.route("/getall").get(collaboratorCtrl.getAll);
router.get("/get/:id", collaboratorCtrl.getCollaboratorById);
router.post("/create", collaboratorCtrl.createCollaborator);
router.delete("/update/:id", collaboratorCtrl.updateCollaboratorById);
router.delete("/delete/:id", collaboratorCtrl.deleteCollaborator);
export default router;

