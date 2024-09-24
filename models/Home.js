import mongoose, { mongo } from "mongoose";
import  { v4 as uuidv4 } from "uuid";

const galleryImages=new mongoose.Schema({
  imageUrl:String,
  text:String,
})
const carouselImages = new mongoose.Schema(
  {
    imageUrl: {type:String},
    title:{type:String},
    subTitle:{type:String},
    button:{
      buttonText:{type:String},
      buttonLink:{type:String}
    }
  }
)

const testimonial=new mongoose.Schema({
  imageUrl:String,
  text:String,
  name:String,
  position:String
})
const whatWeDoItemSchema = new mongoose.Schema(
  {
    // id: { type: String, default: uuidv4 },
    title: { type: String},
    button: {
      buttonText: { type: String},
      buttonLink: { type: String},
    },
    description: { type: String},
  }
);

const HomeData = new mongoose.Schema(
  {
    videoUrl: { type: String},
    bgUrl: { type: String},
    description: { type: String},
    items: [whatWeDoItemSchema],
    carousel:[carouselImages],
    testimonials:[testimonial],
    photoGallery:[galleryImages]
  },
  { timestamps: true }
);

export default mongoose.model("Home-testin3", HomeData);
// export default mongoose.model("Home-wcb", HomeData);