import CurrentScholars from "../models/CurrentScholars.js";
import getImageDownloadURL from "../imageUpload.js";
const create = async(req,res)=>{
const file = req.file
 const getImageInfo = await getImageDownloadURL("", file);
 const imageURL = getImageInfo.imageURL;
 const {name,position,email,currentResearch,information} = req.body;

const response = await CurrentScholars.create({ imageURL ,name,position,email,currentResearch,information});

res.send(response);
}

const getAllData = async (req,res)=>{
    const response = await CurrentScholars.find()
    res.send(response)
}
const getById = async(req,res)=>{
    const {id} = req.params
    const response  =  await CurrentScholars.findById(id)
    res.send(response)
}

const updateById = async(req,res)=>{
    const {id} = req.params
const file = req.file;
if(file){
     const getImageInfo = await getImageDownloadURL("", file);
     const imageURL = getImageInfo.imageURL; 
    const response = await CurrentScholars.findByIdAndUpdate(id,{$set:{...req.body,imageURL}})
    res.send(response)
}else{
    const response = await CurrentScholars.findByIdAndUpdate({_id:id}, {
      $set: req.body,
    });
    res.send(response);
}

}
const findAndDelete = async(req,res)=>{
    const {id} = req.params
    const response =  await CurrentScholars.findByIdAndDelete(id)
    res.send(response)
}
export default { create, getAllData, getById, updateById, findAndDelete };