import ContactRoutes from "../controllers/contacts.ctrl.js" 
import express from "express"
import adminMiddleware from "../middleware/adminMiddleware.js";

const router  = express.Router()


router.route("/create").post(adminMiddleware,ContactRoutes.createMessage);
router.route("/getall").get(ContactRoutes.getAllTheMessages);
router.route("/get/:id").get(ContactRoutes.getMessageById);
router
  .route("/delete/:id")
  .delete(adminMiddleware,ContactRoutes.deleteContactById);
export default router
//   createMessage,
//   getAllTheMessages,
//   getMessageById,
//   deleteContactById,