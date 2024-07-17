import MasterStudents from "../models/MasterStudents.js";
import getImageDownloadURL from "../imageUpload.js";
const create = async (req, res) => {
  const file = req.file;
  const getImageInfo = await getImageDownloadURL("", file);
  const imageURL = getImageInfo.imageURL;
  const { name, association} = req.body;
  
  const response = await MasterStudents.create({
    imageURL,
    name,
    association,
  });
  
  res.send(response);
};
  
const getAllData = async (req, res) => {
  const response = await MasterStudents.find();
  res.send(response);
};
const getById = async (req, res) => {
  const { id } = req.params;
  const response = await MasterStudents.findById(id);
  res.send(response);
};
  
const updateById = async (req, res) => {
  const { id } = req.params;
  const file = req.file;
  if (file) {
    const imgUrl = await getImageDownloadURL("", file);
    const imageURL = imgUrl.imageURL;
    const response = await MasterStudents.findByIdAndUpdate(id, {
      $set: { ...req.body, imageURL },
    });
    res.send(response);
   }else {
    const response = await MasterStudents.findByIdAndUpdate(
      { _id: id },
      {
        $set: req.body,
      }
    );
    res.send(response);
  } 
};  
const findAndDelete = async (req, res) => {
  const { id } = req.params;
  const response = await MasterStudents.findByIdAndDelete(id);
  res.send(response);
};
export default { create, getAllData, getById, updateById, findAndDelete };
