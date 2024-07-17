import express from "express";
import researchControllers from "../controllers/research.ctrl.js";
const router = express.Router();
router.route("/getall").get(researchControllers.getAllData);
router
  .route("/:subfield_name/create")
  .post(researchControllers.createResearchData);
router
  .route("/:subfield_name/create")
  .post(researchControllers.createResearchData);
router
  .route("/:subfield_name/get")
  .get(researchControllers.getDataOfParticularField);

router.route("/get/:id").get(researchControllers.getDataById);
router.route("/update/:id").put(researchControllers.updateById);
router.route("/delete/:id").delete(researchControllers.deleteById);

export default router;
