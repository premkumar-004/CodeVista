import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/db.js";
import userRoute from "./routes/user.route.js";
dotenv.config({});
connectDB();
const PORT = process.env.PORT || 8080;
const app = express();

//API
app.use("/api/v1/user", userRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})