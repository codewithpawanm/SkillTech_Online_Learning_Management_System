import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from "./database/db.js";
import UserRoute from "./routes/user.route.js"
import couseRoute from "./routes/course.route.js";
import mediaRoute from "./routes/media.route.js";
import purchaseRoute from "./routes/purchaseCourse.route.js";
import courseProgressRoute from "./routes/courseProgress.route.js";

dotenv.config({});
//call database connection here
connectDB();
const app=express();

const PORT = process.env.PORT || 3000;

//default middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}));


//APIs
app.use("/api/v1/media", mediaRoute);
app.use("/api/v1/user",UserRoute )
app.use("/api/v1/course", couseRoute);
app.use("/api/v1/purchase", purchaseRoute);
app.use("/api/v1/progress", courseProgressRoute);

http://localhost:8080/api/v1/user/register

app.listen(PORT, ()=>{
    console.log(`Server listen at port ${PORT}`);
    })