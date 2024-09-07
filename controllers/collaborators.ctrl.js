import Collaborator from "../models/Collaborators.js";

const getAll = async (req, res) => {
  const response = await Collaborator.find();
  res.send(response);
};
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
    const { imageURL, imageId, imageName, href } = req.body;

    const newCollaborator = new Collaborator({
      imageURL,
      imageId,
      imageName,
      href,
    });
    await newCollaborator.save();
    res.status(201).json(newCollaborator);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateCollaboratorById = async (req, res) => {
  const { id } = req.params;
  const response = await Collaborator.findByIdAndUpdate(
    { _id: id },
    {
      $set: req.body,
    }
  );
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

const getCollaboratorsByRole = async (req, res) => {
  try {
    const { role } = req.params;
    const response = await Collaborator.find({ role: role });
    if (response) {
      res.status(200).json({ success: true, data: response });
    }
  } catch (error) {
    res.status(400).json({ success: false, data: error.message });
  }
};

export default {
  getCollaboratorById,
  createCollaborator,
  deleteCollaborator,
  updateCollaboratorById,
  getAll,
  getCollaboratorsByRole,
};
