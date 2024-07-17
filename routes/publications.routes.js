import express from "express";


const router = express.Router();
import publicationsCtrl from "../controllers/publications.ctrl.js";
router.get("/getall", publicationsCtrl.getAll);
router.get("/get/:id", publicationsCtrl.getPublicationById);
router.post("/create", publicationsCtrl.createPublication);
router.put("/update/:id", publicationsCtrl.updatePublication);
router.delete("/delete/:id", publicationsCtrl.deletePublication);

export default router
