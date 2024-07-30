import ResearchData from "../models/Research.js";

const getAllData = async (req,res)=>{
  const response = await ResearchData.find()
  res.status(200).send(response)
}

const createResearchData = async (req, res) => {
  const response = await ResearchData.create({
    subfield_name: req.params.subfield_name,
    ...req.body,
  });
  res.status(200).send(response)
};

const getDataOfParticularField = async (req, res) => {
  const { subfield_name } = req.params;
  const response = await ResearchData.find({ subfield_name });
  res.send(response);
}; 
const getDataById = async (req,res)=>{
  const {id} = req.params;
  const response = await ResearchData.findOne({_id:id})
  res.send(response)
};

const updateById = async(req,res)=>{
  const {id} = req.params
  const response = await ResearchData.findByIdAndUpdate({_id:id},{$set:req.body})
  res.send(response)
}

const deleteById= async(req,res)=>{
  const {id} = req.params;
  const response = await ResearchData.findByIdAndDelete({_id:id})

  res.send(response)
}
export default {
  createResearchData,
  getAllData,
  getDataOfParticularField,
  getDataById,
  updateById,
  deleteById,
};