import { types } from "@babel/core";
import mongoose from "mongoose";

const currentScholarsSchema = new mongoose.Schema({
  imageURL: {
    type: String,
  },
  name: {
    type: String,
  },
  position: {
    type: String,
  },
  email: {
    type: String,
  },
  currentResearch: {
    type: String,
  },
  information: {
    type: String,
  },
});
export default mongoose.model("current-scholars", currentScholarsSchema);
