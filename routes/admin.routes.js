import express from "express";
const app = express();
import AdminController from "../controllers/admin.ctrl.js";
const router = express.Router();
import adminMiddleware from "../middleware/adminMiddleware.js"
router.route("/signup").post(AdminController.signUpFunction);
router.route("/middleware").get(adminMiddleware);

export default router;