import mongoose  from "mongoose";
const contactSchema = mongoose.Schema({
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
});


const ContactUs = mongoose.model("contact-us-WCB",contactSchema)
export default  ContactUs