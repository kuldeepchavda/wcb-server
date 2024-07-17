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
  subfield_name: { type: String },
  imageURLs: [imageSchema],
  description: {
    type: String,
  },
});

const Activities = mongoose.model("wcb-Activities", activitySchema);
export default Activities;
 