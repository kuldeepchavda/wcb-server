import mongoose from "mongoose";

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

const activitySchema = new mongoose.Schema({
  title: {
    type: String,
  },
  bgImage: {
    type: String,
  },
  subfield_name: 
  { type: String },
  imageURLs:
   [imageSchema],
  description: {
    type: String,
  },
});

const Activities = mongoose.model("wcb-Actjgg", activitySchema);
export default Activities;
