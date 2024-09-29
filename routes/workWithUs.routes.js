// const express = require("express")
import express from "express";
import workWithUsCTRLs from "../controllers/workWithUs.ctrl.js";
const router = express.Router();



// operation for whole data
router.route("/create").post(workWithUsCTRLs.createWorkWithUs);
router.route("/getall").get(workWithUsCTRLs.getAll);
router.route("/delete").delete(workWithUsCTRLs.deleteSome);

// operations for work with us items
router.route("/workwithusitems/:id/create").post(workWithUsCTRLs.createWorkWithUsItems);
router
  .route("/workwithusitems/:id/:itemId/update")
  .put(workWithUsCTRLs.updateWorkWithUsItems);
router
  .route("/workwithusitems/:id/:itemIndex/delete")
  .delete(workWithUsCTRLs.deleteWorkWithUsItems);


export default router