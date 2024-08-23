import HomeData from "../models/Home.js";
// Create a new entry
const create = async (req, res) => {
  try {
    const { videoUrl, bgUrl, description, items } = req.body;

    const newEntry = new HomeData({
      videoUrl,
      bgUrl,
      description,
      items,
    });

    await newEntry.save();

    return res.status(201).json({ success: true, data: newEntry });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// Get all entries
const getAll = async (req, res) => {
  try {
    const entries = await HomeData.find();
    return res.status(200).json({ success: true, data: entries });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// Get a single entry by ID
const getById = async (req, res) => {
  try {
    const entry = await HomeData.find({id:req.params.id});
    console.log(entry)
    if (!entry) {
      return res
        .status(404)
        .json({ success: false, message: "Entry not found" });
    }
    return res.status(200).json({ success: true, data: entry });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// Update an entry by ID
const update = async (req, res) => {
  try {
    const { videoUrl, bgUrl, description, items } = req.body;

    const updatedEntry = await HomeData.findOneAndUpdate(
      { id: req.params.id },
      { videoUrl, bgUrl, description, items },
      { new: true }
    );

    if (!updatedEntry) {
      return res
        .status(404)
        .json({ success: false, message: "Entry not found" });
    }

    return res.status(200).json({ success: true, data: updatedEntry });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// Delete an entry by ID
const deleteData = async (req, res) => {
  try {
    const deletedEntry = await HomeData.findByIdAndDelete({
      id: req.params.id,
    });

    if (!deletedEntry) {
      return res
        .status(404)
        .json({ success: false, message: "Entry not found" });
    }

    return res.status(200).json({ success: true, data: deletedEntry });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

const updateActivityById = async (req, res) => {
  try {
    const { entryId, itemId } = req.params;

    // Find the entry by ID
    const entry = await HomeData.find({id:entryId}); // Use findById or findOne instead of find
  //  console.log(entry.items)
    if (!entry) {
      return res
        .status(404)
        .json({ success: false, message: "Entry not found" });
    }

    // Find the index of the item to be updated
    const itemIndex = entry[0].items.findIndex((item) => item.id === itemId);
    


    if (itemIndex === -1) {
      return res
        .status(404)
        .json({ success: false, message: "Item not found" });
    }
    // Update the item at the found index with the provided data
entry[0].items[itemIndex] = {
  ...entry[0].items[itemIndex], // Keep existing fields
  ...req.body, // Overwrite with new data
  id: entry[0].items[itemIndex].id, // Explicitly preserve the original id
};
    console.log(entry[0].items[itemIndex]);

    // Save the updated entry back to the database
    await entry[0].save();
    console.log(entry[0])
    res.status(200).json({ success: "true updated", data: entry.items });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
}; 
export default {
  create,
  getAll,
  getById,
  update,
  deleteData,
  updateActivityById,
};
