import express from "express";
import { getMessages, sendMessage } from "../controllers/message.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.get("/:Id", protectRoute, getMessages);

router.post("/send/:receiverId", protectRoute, sendMessage);

export default router;