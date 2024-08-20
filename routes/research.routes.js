import express from "express";
import researchControllers from "../controllers/research.ctrl.js";
const router = express.Router();
import adminMiddleware from "../middleware/adminMiddleware.js";

router.route("/getall").get(researchControllers.getAllData);
router
  .route("/:subfield_name/create")
  .post(adminMiddleware,researchControllers.createResearchData);
router
  .route("/:subfield_name/get")
  .get(researchControllers.getDataOfParticularField);
router.route("/get/:id").get(researchControllers.getDataById);
router.route("/update/:id").put(adminMiddleware,researchControllers.updateById);
router
  .route("/delete/:id")
  .delete(adminMiddleware,researchControllers.deleteById);
export default router;
