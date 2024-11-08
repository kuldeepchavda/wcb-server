import HomeData from "../models/Home.js";

// Create a new entry in HomeData
const createHomeData = async (req, res) => {
  try {
    const newEntry = new HomeData(req.body);
    await newEntry.save();
    return res.status(201).json({ success: true, data: newEntry });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// Get all HomeData entries
const getAllHomeData = async (req, res) => {
  try {
    const entries = await HomeData.find();
    return res.status(200).json({ success: true, data: entries });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// Get a single HomeData entry by ID
const getHomeDataById = async (req, res) => {
  try {
    const entry = await HomeData.findById(req.params.id);
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

// Update a HomeData entry by ID
const updateHomeData = async (req, res) => {
  try {
    const updatedEntry = await HomeData.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
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

// Delete a HomeData entry by ID
const deleteHomeData = async (req, res) => {
  try {
    const deletedEntry = await HomeData.findByIdAndDelete(req.params.id);
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

// Create a new item in the whatWeDo array within a specific HomeData entry
const addItemToHomeData = async (req, res) => {
  try {
    const entry = await HomeData.findById(req.params.id);
    if (!entry) {
      return res
        .status(404)
        .json({ success: false, message: "Entry not found" });
    }

    entry.items.push(req.body);
    await entry.save();

    return res.status(200).json({ success: true, data: entry.items });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// Update a specific item in the whatWeDo array within a HomeData entry
const updateItemInHomeData = async (req, res) => {
  try {
    const { id, itemId } = req.params;
    const entry = await HomeData.findById(id);

    if (!entry) {
      return res
        .status(404)
        .json({ success: false, message: "Entry not found" });
    }

    const itemIndex = entry.items.findIndex(
      (item) => item._id.toString() === itemId
    );

    if (itemIndex === -1) {
      return res
        .status(404)
        .json({ success: false, message: "Item not found" });
    }

    entry.items[itemIndex] = { ...entry.items[itemIndex], ...req.body };
    await entry.save();

    return res.status(200).json({ success: true, data: entry.items });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// Delete a specific item from the whatWeDo array within a HomeData entry
const deleteItemFromHomeData = async (req, res) => {
  try {
    const { id, itemId } = req.params;
    const entry = await HomeData.findById(id);

    if (!entry) {
      return res
        .status(404)
        .json({ success: false, message: "Entry not found" });
    }

    const itemIndex = entry.items.findIndex(
      (item) => item._id.toString() === itemId
    );

    if (itemIndex === -1) {
      return res
        .status(404)
        .json({ success: false, message: "Item not found" });
    }
    entry.items.splice(itemIndex, 1);
    await entry.save();

    return res.status(200).json({ success: true, data: entry.items });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
//operations for carousel
const addImageToCarousel = async (req, res) => {
  try {
    const entry = await HomeData.findById(req.params.id);
    if (!entry) {
      return res
        .status(404)
        .json({ success: false, message: "Entry not found" });
    }

    entry.carousel.push(req.body);
    await entry.save();

    return res.status(200).json({ success: true, data: entry.items });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};


const updateImageInCarousel = async (req, res) => {
  try {
    const { id, imageId } = req.params;
    const entry = await HomeData.find({_id:id});
    if (!entry) {
      return res
      .status(404)
      .json({ success: false, message: "Entry not found" });
    }
    
    // console.log(entry[0].carousel);
    const imageIndex = entry[0].carousel.findIndex(
      (imageData) => imageData._id.toString() === imageId
    );
    // console.log(imageIndex);

    if (imageIndex === -1) {
      return res
        .status(404)
        .json({ success: false, message: "Item not found" });
    }
console.log("reached")
    entry[0].carousel[imageIndex] = { ...entry[0].carousel[imageIndex], ...req.body };
    await entry[0].save();

    return res.status(200).json({ success: true, data: entry.items });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};


const deleteImageFromCarousel = async (req, res) => {
  try {
    const { id, imageId } = req.params;
    const entry = await HomeData.find({ _id: id });

    if (!entry) {
      return res
        .status(404)
        .json({ success: false, message: "Entry not found" });
    }

   const imageIndex = entry[0].carousel.findIndex(
     (imageData) => imageData._id.toString() === imageId
   );
console.log(imageIndex)
    if (imageIndex === -1) {
      return res
        .status(404)
        .json({ success: false, message: "Item not found" });
    }
    entry[0].carousel.splice(imageIndex, 1);
    await entry[0].save();

    return res.status(200).json({ success: true, data: entry.items });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
// controllers for testimonials

const addTestimonials = async (req, res) => {
  try {
    const entry = await HomeData.findById(req.params.id);
    if (!entry) {
      return res
        .status(404)
        .json({ success: false, message: "Entry not found" });
    }

    entry.testimonials.push(req.body);
    await entry.save();

    return res.status(200).json({ success: true, data: entry.items });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};



const updateTestimonials = async (req, res) => {
  try {
    const { id, imageId } = req.params;
    const entry = await HomeData.find({ _id: id });
    if (!entry) {
      return res
        .status(404)
        .json({ success: false, message: "Entry not found" });
    }

    // console.log(entry[0].carousel);
    const imageIndex = entry[0].testimonials.findIndex(
      (imageData) => imageData._id.toString() === imageId
    );
    // console.log(imageIndex);

    if (imageIndex === -1) {
      return res
        .status(404)
        .json({ success: false, message: "Item not found" });
    }
    console.log("reached");
    entry[0].testimonials[imageIndex] = {
      ...entry[0].testimonials[imageIndex],
      ...req.body,
    };
    await entry[0].save();

    return res.status(200).json({ success: true, data: entry.items });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};


const deleteTestimonials = async (req, res) => {
  try {
    const { id, imageId } = req.params;
    const entry = await HomeData.find({ _id: id });

    if (!entry) {
      return res
        .status(404)
        .json({ success: false, message: "Entry not found" });
    }

    const imageIndex = entry[0].testimonials.findIndex(
      (imageData) => imageData._id.toString() === imageId
    );
    // console.log(imageIndex);
    if (imageIndex === -1) {
      return res
        .status(404)
        .json({ success: false, message: "Item not found" });
    }
    entry[0].testimonials.splice(imageIndex, 1);
    await entry[0].save();

    return res.status(200).json({ success: true, data: entry.items });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// photo gallery
const addPhotoGallery = async (req, res) => {
  try {
    const entry = await HomeData.findById(req.params.id);
    if (!entry) {
      return res
        .status(404)
        .json({ success: false, message: "Entry not found" });
    }

    entry.photoGallery.push(req.body);
    await entry.save();

    return res.status(200).json({ success: true, data: entry.items });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

const updatePhotoGallery = async (req, res) => {
  try {
    const { id, imageId } = req.params;
    const entry = await HomeData.find({ _id: id });
    if (!entry) {
      return res
        .status(404)
        .json({ success: false, message: "Entry not found" });
    }

    // console.log(entry[0].carousel);
    const imageIndex = entry[0].photoGallery.findIndex(
      (imageData) => imageData._id.toString() === imageId
    );
    // console.log(imageIndex);

    if (imageIndex === -1) {
      return res
        .status(404)
        .json({ success: false, message: "Item not found" });
    }
    console.log("reached");
    entry[0].photoGallery[imageIndex] = {
      ...entry[0].photoGallery[imageIndex],
      ...req.body,
    };
    await entry[0].save();

    return res.status(200).json({ success: true, data: entry.items });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

const deletePhotoGallery = async (req, res) => {
  try {
    const { id, imageId } = req.params;
    const entry = await HomeData.find({ _id: id });

    if (!entry) {
      return res
        .status(404)
        .json({ success: false, message: "Entry not found" });
    }

    const imageIndex = entry[0].photoGallery.findIndex(
      (imageData) => imageData._id.toString() === imageId
    );
    // console.log(imageIndex);
    if (imageIndex === -1) {
      return res
        .status(404)
        .json({ success: false, message: "Item not found" });
    }
    entry[0].photoGallery.splice(imageIndex, 1);
    await entry[0].save();

    return res.status(200).json({ success: true, data: entry.items });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
export default {
  createHomeData,
  getAllHomeData,
  getHomeDataById,
  updateHomeData,
  deleteHomeData,
  addItemToHomeData,
  updateItemInHomeData,
  deleteItemFromHomeData,

  // carousel
  addImageToCarousel,
  updateImageInCarousel,
  deleteImageFromCarousel,
  // testimonials
  addTestimonials,
  updateTestimonials,
  deleteTestimonials,

  // photo gallery
  addPhotoGallery,
  updatePhotoGallery,
  deletePhotoGallery
};