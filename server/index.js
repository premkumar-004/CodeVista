import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./database/db.js";
import userRoute from "./routes/user.route.js";
dotenv.config({});
connectDB();
const PORT = process.env.PORT || 8080;
const app = express();

//default middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:8080",
    credentials: true,
}));
app.use(express.urlencoded({ extended: true }));

//API
app.use("/api/v1/user", userRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})