import dotenv from "dotenv"
dotenv.config()
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import express from "express";
import cors from "cors";
import activityRoutes from "./routes/activities.routes.js";
import config from "./config.js";
import curretScholarRouter from "./routes/currentSchollars.routes.js"
import masterScholarsRouter from "./routes/master-students.routes.js"
import researchRoutes from "./routes/research.routes.js";
import collaboratorsRoutes from "./routes/collaborators.routes.js"
import publicationRoutes from "./routes/publications.routes.js"
import HomeRoutes from "./routes/home.routes.js"
import bodyParser from "body-parser";
import mongoose from "mongoose";
import { join } from "node:path";
import ContactRouters from "./routes/contactUsMessages.routes.js"
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.get("/introduction", (req, res) => {
  res.sendFile(join(__dirname, "index.html"));
});
app.use("/activities", activityRoutes);
app.use("/research", researchRoutes);    
app.use("/current_scholars", curretScholarRouter);//done
app.use("/master_students", masterScholarsRouter);
app.use("/collaborators",collaboratorsRoutes)//done
app.use("/publications",publicationRoutes)//done
app.use("/contactus",ContactRouters)
app.use("/home", HomeRoutes);


mongoose
  .connect(process.env.MONGODB_URL)
  .then((res) => {
    console.log("Connected DB");
  })
  .catch((Err) => {
    console.log("Failed to connect to the db");
  });
app.listen(config.port, () =>
  console.log(`Server is live @ ${config.hostUrl}`)
);
