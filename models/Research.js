import mongoose  from "mongoose";
const imageSchema = new mongoose.Schema({
  imageId: {
    type: String,
  },
  imageURL: {
    type: String,
  },
  imageName: {
    type: String,
  },
});
const researchSchema = new mongoose.Schema({
  images:{
type:[imageSchema]
  },
  bgImage:{
    type:String
  },
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