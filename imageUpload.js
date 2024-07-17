import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import multer from "multer";
const app = express();
import path from "path";
import { fireStorage } from "./firebase.js";
import { v4 as uuidv4 } from "uuid";

// Multer setup
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
 const getImageDownloadURL = async (dir, file) => {
  try {
    const extension = path.extname(file.originalname);
    const name = uuidv4() 
    const filename = name + extension;
    // console.log(filename);
    const imageRef = ref(fireStorage, `${dir}/${filename}`);
    const snapshot = await uploadBytes(imageRef, file.buffer);
    const imageURL = await getDownloadURL(snapshot.ref);
    // console.log({ imageURL, imageId: name, imageName: name + extension });
    return {imageURL,imageId:name,imageName:name+extension};
  } catch (error) {
    return console.log(error);
  }
};

// Routes
app.post("/products", upload.single("image"), async (req, res, next) => {
  const file = req.file;
  const dir = "testing2/testing2-2"

  
const url = await getImageDownloadURL(dir,file)  // demo to use
res.status(200).json({url:url})
});

// Error handling
app.use((error, req, res, next) => {
  res
    .status(error.status || 500)
    .json({ message: error.message || "Server error" });
});
// const port = 3000;
// app.listen(port, () => {
//   console.log(`app listening on port ${port}`);
// });
 export default getImageDownloadURL;