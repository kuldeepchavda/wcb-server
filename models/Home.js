import mongoose from "mongoose";
import  { v4 as uuidv4 } from "uuid";

const whatWeDoItemSchema = new mongoose.Schema(
  {
    id: { type: String, default: uuidv4 },
    title: { type: String},
    button: {
      buttonText: { type: String},
      buttonLink: { type: String},
    },
    description: { type: String},
  }
  //   { _id: false }
);

const whatWeDoSchema = new mongoose.Schema(
  {
    id: { type: String, default: uuidv4 },
    videoUrl: { type: String},
    bgUrl: { type: String},
    description: { type: String},
    items: [whatWeDoItemSchema],
  },
  { timestamps: true }
);

export default mongoose.model("Home-wcb", whatWeDoSchema);
// HomeData