import express from "express";

import adminMiddleware from "../middleware/adminMiddleware.js";

const router = express.Router();
import publicationsCtrl from "../controllers/publications.ctrl.js";
router.get("/getall", publicationsCtrl.getAll);
router.get("/get/:id", publicationsCtrl.getPublicationById);
router.post("/create",adminMiddleware, publicationsCtrl.createPublication);
router.put("/update/:id",adminMiddleware, publicationsCtrl.updatePublication);
router.delete("/delete/:id",adminMiddleware, publicationsCtrl.deletePublication);

export default router
