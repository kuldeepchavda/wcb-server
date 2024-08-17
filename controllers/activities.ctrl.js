import getImageDownloadURL from "../imageUpload.js";
import Activity from "../models/Activities.js";

// create
const trainingAndWorkshopImageUpload = async (req, res) => {
  try {
    const { subfield_name } = req.params;
    const { description, imageURLs } = req.body;
    const newActivity = new Activity({
      subfield_name,
      imageURLs,
      description,
    });

    const savedActivity = await newActivity.save();
    // console.log(savedActivity);
    res.status(200).json({ savedActivity });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
// get all
const getActivities = async (req, res) => {
  try {
    const { subfield_name } = req.params;
    const activities = await Activity.find({ subfield_name });
    res.status(200).json(activities);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
// get by id
const getActivityById = async (req, res) => {
  try {
    const activity = await Activity.findById(req.params.id);
    if (!activity)
      return res.status(404).json({ message: "Activity not found" });
    res.status(200).json(activity);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
// update by id
const updateActivity = async (req, res) => {
  try {
    const activity = await Activity.findById(req.params.id);
    if (!activity) {
      return res.status(404).json({ message: "Activity not found" });
    }
    if (req.body.description) {
      activity.description = req.body.description;
    }
    if (req.body.imageURLs) {
      console.log(req.files);
      activity.imageURLs = URLs;
    }
    const updatedActivity = await activity.save();
    res.status(200).json(updatedActivity);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
// find and delete
const deleteActivity = async (req, res) => {
  try {
    const { id } = req.params;

    const activity = await Activity.findOneAndDelete({ _id: id });
    console.log(activity);
    if (!activity) {
      return res.status(404).json({ message: "Activity not found" });
    } else {
      res.status(200).json({ message: "Activity deleted successfully" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export default {
  trainingAndWorkshopImageUpload,
  getActivities,
  getActivityById,
  updateActivity,
  deleteActivity,
};
