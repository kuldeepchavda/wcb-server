import mongoose from "mongoose";
const collaboratorSchema = new mongoose.Schema({
  imageURL: { type: String, required: true },
  imageId: { type: String, required: true },
  imageName: { type: String, required: true },
});

const Collaborator = mongoose.model("collaborator", collaboratorSchema);
export default Collaborator;

