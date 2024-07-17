import mongoose from "mongoose";

const publicationSchema = new mongoose.Schema({
  publication: { type: String, required: true },
});

const Publication = mongoose.model("Publication", publicationSchema);

export default Publication