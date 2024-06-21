import { getReceiverSocketId, io } from "../Socket/socket.js";
import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res, next) => {
    try {
        const {message} = req.body;
        const {receiverId} = req.params;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants: {$all: [senderId, receiverId]},
        });

        if(!conversation){
            conversation = await Conversation.create({
                participants: [senderId, receiverId]
            })
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message
        });

        if(newMessage){
            conversation.messages.push(newMessage._id);
        }

        // This will run in parallel
        await Promise.all([newMessage.save(), conversation.save()]);

        const receiverSocketId = getReceiverSocketId(receiverId);
        if(receiverSocketId){
            io.to(receiverSocketId).emit("newMessage", newMessage);
        }

        return res.status(201).json(newMessage);
    } catch (error) {
        console.log("Send message error ", error);
        res.status(500).json({error: "Internal server error"});
    }
}

export const getMessages = async (req, res, next) => {
    try {
        const {Id: userToChatId} = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants: {$all: [senderId, userToChatId]},
        }).populate("messages"); // Convert to actual messages

        if(!conversation){
            return res.status(200).json([]);
        }

        res.status(200).json(conversation.messages);
    } catch (error) {
        console.log("get message error ", error);
        res.status(500).json({error: "Internal server error"});
    }
}