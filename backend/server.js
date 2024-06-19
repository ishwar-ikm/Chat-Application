// imports
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import connectToDB from "./db/connectToDB.js"   
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js"

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

// middlewares
app.use(express.json()); // to parse incoming requests
app.use(cookieParser()); // To parse the cookie

app.get("/", (req, res, next) => {
    res.send("Hello");
});

app.use("/api/auth", authRoutes); // authentication routes
app.use("/api/messages", messageRoutes); // message routes
app.use("/api/users", userRoutes); // user routes

app.listen(PORT, () => {
    connectToDB();
    console.log(`Listening to post ${PORT}`);
});
