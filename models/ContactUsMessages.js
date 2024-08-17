import mongoose from "mongoose";
const contactSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
    },
    message: {
      type: String,
    },
createdAt:{
  type:Date,
  default:Date
}
  },

);

const ContactUs = mongoose.model("contact-us-WCB", contactSchema);
export default ContactUs;
