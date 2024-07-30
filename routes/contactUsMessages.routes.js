import ContactRoutes from "../controllers/contacts.ctrl.js" 
import express from "express"
const router  = express.Router()


router.route("/create").post(ContactRoutes.createMessage)
router.route("/getall").get(ContactRoutes.getAllTheMessages)
router.route("/get/:id").get(ContactRoutes.getMessageById)
router.route("/delete/:id").delete(ContactRoutes.deleteContactById)
export default router
//   createMessage,
//   getAllTheMessages,
//   getMessageById,
//   deleteContactById,