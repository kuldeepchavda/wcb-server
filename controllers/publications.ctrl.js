import Publication from "../models/Publications.js";
const getAll = async(req,res)=>{
    const response = await Publication.find();
    res.send(response)
}
const getPublicationById = async (req, res) => {
  try {
    const { id } = req.params;
    const publication = await Publication.findById(id);
    if (!publication) {
      return res.status(404).json({ message: "Publication not found" });
    }
    res.json(publication);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createPublication = async (req, res) => {
  try {
    const { publication } = req.body;
    const newPublication = new Publication({ publication });
    await newPublication.save();
    res.status(201).json(newPublication);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updatePublication = async (req, res) => {
  try {
    const { id } = req.params;
    const { publication } = req.body;
    const updatedPublication = await Publication.findByIdAndUpdate(
      id,
      { publication },
      { new: true }
    );
    if (!updatedPublication) {
      return res.status(404).json({ message: "Publication not found" });
    }
    res.json(updatedPublication);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deletePublication = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPublication = await Publication.findByIdAndDelete(id);
    if (!deletedPublication) {
      return res.status(404).json({ message: "Publication not found" });
    }
    res.json({ message: "Publication deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default {
    getAll,
  getPublicationById,
  createPublication,
  updatePublication,
  deletePublication,
};
