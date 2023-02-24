import { chatModel } from '../../models/index.js';

const createChat = async (req, res) => {
    const { userId, id } = req.body;

    const newChat = new chatModel({
        members: [userId, id],
    });

    try {
        const result = await newChat.save();
        res.json(result);
    } catch (error) {
        res.status(500).json(error);
    }
}

export default createChat;
