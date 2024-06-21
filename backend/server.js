// imports
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import connectToDB from "./db/connectToDB.js"   
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js"
import { app, server } from "./Socket/socket.js";

const PORT = process.env.PORT || 5000;

dotenv.config();

// middlewares
app.use(express.json()); // to parse incoming requests
app.use(cookieParser()); // To parse the cookie

app.use("/api/auth", authRoutes); // authentication routes
app.use("/api/messages", messageRoutes); // message routes
app.use("/api/users", userRoutes); // user routes

server.listen(PORT, () => {
    connectToDB();
    console.log(`Listening to post ${PORT}`);
});
