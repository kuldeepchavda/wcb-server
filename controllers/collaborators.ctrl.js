import Collaborator from "../models/Collaborators.js"

import getImageDownloadURL from "../imageUpload.js";
const getAll=async(req,res)=>{
const response = await Collaborator.find()
res.send(response)
}
const getCollaboratorById = async (req, res) => {
  try {
    const { id } = req.params;
    const collaborator = await Collaborator.findById(id);
    if (!collaborator) {
      return res.status(404).json({ message: "Collaborator not found" });
    }
    res.json(collaborator);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createCollaborator = async (req, res) => {
  try {
    const file = req.file;
    const dir = "collaborators";

    const { imageURL, imageId, imageName } = await getImageDownloadURL(
      dir,
      file
    );

    const newCollaborator = new Collaborator({ imageURL, imageId, imageName });
    await newCollaborator.save();
    res.status(201).json(newCollaborator);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
 

const deleteCollaborator = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCollaborator = await Collaborator.findByIdAndDelete(id);
    if (!deletedCollaborator) {
      return res.status(404).json({ message: "Collaborator not found" });
    }
    res.json({ message: "Collaborator deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export default {getCollaboratorById,createCollaborator,deleteCollaborator,getAll}