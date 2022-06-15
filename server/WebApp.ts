import express from "express";
import morgan from "morgan";
import cors from "cors";
import tasksRoutes from "./routes";
import path from "path";


export const WebApp = express();

//MIDDLEWARE
WebApp.use(cors());
WebApp.use(morgan("dev"));
WebApp.use(express.json());
WebApp.use("/api", tasksRoutes);


//STATIC FILES  
WebApp.use(express.static(path.join(__dirname,"..","..","dist")));




export default WebApp;