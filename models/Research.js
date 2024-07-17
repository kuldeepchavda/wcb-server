import mongoose  from "mongoose";
const researchSchema = new mongoose.Schema({
  subfield_name: {
    type: String,
  },
  description: {
    type: String,
  },
  associationName: {
    type: String,
  },
  name: { type: String },
  topic: { type: String },
  year: { type: String },
});

export default mongoose.model("research-testings",researchSchema)