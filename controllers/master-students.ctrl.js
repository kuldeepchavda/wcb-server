import MasterStudents from "../models/MasterStudents.js";
const create = async (req, res) => {
  const { name, association,imageURL} = req.body;
  
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
    const response = await MasterStudents.findByIdAndUpdate(
      { _id: id },
      {
        $set: req.body,
      }
    );
    res.send(response);
};  
const findAndDelete = async (req, res) => {
  const { id } = req.params;
  const response = await MasterStudents.findByIdAndDelete(id);
  res.send(response);
};
export default { create, getAllData, getById, updateById, findAndDelete };
