import { Conversation } from "../models/conversationModel.js";
import { Message } from "../models/messageModel.js";
// import { getReceiverSocketId, io } from "../socket/socket.js";

export const sendMessage = async (req,res) => {
    try {
        const senderId = req.id;
        const receiverId = req.params.id;
        const {message} = req.body;

        // just simply find the conversation with both sender and receiver id
        let gotConversation = await Conversation.findOne({
            participants:{$all : [senderId, receiverId]},
        });
        // if no conversation found, create a new one with both sender and receiver id
        if(!gotConversation){
            gotConversation = await Conversation.create({
                participants:[senderId, receiverId]
            })
        };
        const newMessage = await Message.create({
            senderId,
            receiverId,
            message
        });
        // check if the message is created successfully and push it to the conversation
        if(newMessage){
            gotConversation.messages.push(newMessage._id);
        };
        
        await gotConversation.save();

        // await Promise.all([gotConversation.save(), newMessage.save()]);
        
        // SOCKET IO
        // const receiverSocketId = getReceiverSocketId(receiverId);
        // if(receiverSocketId){
        //     io.to(receiverSocketId).emit("newMessage", newMessage);
        // }
        return res.status(201).json({
            newMessage
        })
    } catch (error) {
        console.log(error);
    }
}

// simply chat history between 2 users
export const getMessage = async (req,res) => {
    try {
        const receiverId = req.params.id;
        const senderId = req.id;
        const conversation = await Conversation.findOne({
            participants:{$all : [senderId, receiverId]}
        }).populate("messages"); 
        return res.status(200).json(conversation?.messages);
    } catch (error) {
        console.log(error);
    }
}