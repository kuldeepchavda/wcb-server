 
import mongoose from "mongoose";

const masterStudentsSchema = new mongoose.Schema({
  imageURL: {
    type: String,
  },
  name: {
    type: String,
  },
  association: {
    type: String,
  }
});
export default mongoose.model("master-students-testings", masterStudentsSchema);