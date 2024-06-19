// imports
import express from "express";
import dotenv from "dotenv";

import connectToDB from "./db/connectToDB.js"   
import authRoutes from "./routes/auth.route.js";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

// middlewares
app.use(express.json()) // to parse incoming requests

app.get("/", (req, res, next) => {
    res.send("Hello");
});

app.use("/api/auth", authRoutes); // authentication routes

app.listen(PORT, () => {
    connectToDB();
    console.log(`Listening to post ${PORT}`);
});
