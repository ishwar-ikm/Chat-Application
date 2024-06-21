// imports
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path from "path";

import connectToDB from "./db/connectToDB.js"   
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js"
import { app, server } from "./Socket/socket.js";

const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

dotenv.config();

// middlewares
app.use(express.json()); // to parse incoming requests
app.use(cookieParser()); // To parse the cookie

app.use("/api/auth", authRoutes); // authentication routes
app.use("/api/messages", messageRoutes); // message routes
app.use("/api/users", userRoutes); // user routes

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
})

server.listen(PORT, () => {
    connectToDB();
    console.log(`Listening to post ${PORT}`);
});
