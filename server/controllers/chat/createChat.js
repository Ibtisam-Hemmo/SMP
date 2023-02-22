import { chatModel } from '../../models/index.js';

const createChat = async (req, res) => {
    const { senderId, receiverId } = req.body;

    const newChat = new chatModel({
        members: [senderId, receiverId],
    });

    try {
        const result = await newChat.save();
        res.json(result);
    } catch (error) {
        res.status(500).json(error);
    }
}

export default createChat;
