import mongoose, { mongo } from "mongoose";
const workWithUsItems= new mongoose.Schema({
    heading:String,
    title:String,
    description:String,
    imageUrl:String,
    button:{
        buttonText:String,
        buttonUrl:String
    }
})

const workWithUs = new mongoose.Schema({
    mainHeading:String,
    mainDescription:String,
    workWithUsOpt:[workWithUsItems]
})

export default mongoose.model("work_with_us",workWithUs);