import { types } from "@babel/core";
import mongoose from "mongoose";

const publicationSchema = new mongoose.Schema({
  publication: { type: String, required: true },
  link: { type: String },
});

const Publication = mongoose.model("Publication", publicationSchema);

export default Publication;
