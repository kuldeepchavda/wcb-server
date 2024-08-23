import HomeData from "../models/Home.js";
// Create a new entry
const create = async (req, res) => {
  try {
    const { videoUrl, bgUrl, description, items } = req.body;

    const newEntry = new HomeData({
      ...req.body
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
    const entry = await HomeData.find({_id:req.params.id});
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
      { _id: req.params.id },
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
    const deletedEntry = await HomeData.findOneAndDelete({
      _id: req.params.id,
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

// const updateActivityById = async (req, res) => {
//   try {
//     const { entryId, itemId } = req.params;

//     // Find the entry by ID
//     const entry = await HomeData.find({_id:entryId}); // Use findById or findOne instead of find
//    console.log(entry[0].items)
//     if (!entry) {
//       return res
//         .status(404)
//         .json({ success: false, message: "Entry not found" });
//     }

//     // Find the index of the item to be updated
//     const itemIndex = entry[0].items.findIndex(
//       (item) => item._id.toString() === itemId
//     );
//     console.log(itemIndex)

//     if (itemIndex === -1) {
//       return res
//         .status(404)
//         .json({ success: false, message: "Item not found" });
//     }
//     // Update the item at the found index with the provided data
// entry[0].items[itemIndex] = {
//   ...entry[0].items[itemIndex], // Keep existing fields
//   ...req.body, // Overwrite with new data
//   // _id: entry[0].items[itemIndex]._id, // Explicitly preserve the original id
// };
//     console.log(entry[0].items[itemIndex]);

//     // Save the updated entry back to the database
//     await entry[0].save();
//     console.log(entry[0])
//     res.status(200).json({ success: "true updated", data: entry.items });
//   } catch (error) {
//     res.status(500).json({ success: false, message: error });
//   }
// }; 
const updateActivityById = async (req, res) => {
  try {
    const { entryId, itemId } = req.params;

    // Find the entry by ID
    const entry = await HomeData.findById(entryId);
    console.log(entry.items);

    if (!entry) {
      return res
        .status(404)
        .json({ success: false, message: "Entry not found" });
    }

    // Find the index of the item to be updated
    const itemIndex = entry.items.findIndex(
      (item) => item.id === itemId // Convert ObjectId to string for comparison
    );
    console.log(itemIndex);

    if (itemIndex === -1) {
      return res
        .status(404)
        .json({ success: false, message: "Item not found" });
    }

    // Update the item at the found index with the provided data
    entry.items[itemIndex] = {
      ...entry.items[itemIndex], // Keep existing fields
      ...req.body, // Overwrite with new data
      // _id: entry.items[itemIndex]._id, // Explicitly preserve the original id
    };
    console.log(entry.items[itemIndex]);

    // Save the updated entry back to the database
    await entry.save();
    console.log(entry);
    res.status(200).json({ success: "true updated", data: entry.items });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
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
