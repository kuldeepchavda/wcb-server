import express from "express";
const router = express.Router();
import collaboratorCtrl from "../controllers/collaborators.ctrl.js";
import adminMiddleware from "../middleware/adminMiddleware.js";

router.route("/getall").get(  collaboratorCtrl.getAll);
router.get("/get/:id", collaboratorCtrl.getCollaboratorById);
router.post("/create", adminMiddleware, collaboratorCtrl.createCollaborator);
router.put(
  "/update/:id",
  adminMiddleware,
  collaboratorCtrl.updateCollaboratorById
);
router.delete(
  "/delete/:id",
  adminMiddleware,
  collaboratorCtrl.deleteCollaborator
);
export default router;
