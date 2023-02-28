import { chatModel } from '../../models/index.js';

const createChat = async (req, res) => {
    const { userId, id } = req.body;
    try {
        const chatFound = await chatModel.findOne({ members: [userId, id] });
        if (chatFound) res.json(chatFound)
        else {
            const newChat = new chatModel({
                members: [userId, id],
            });

            const result = await newChat.save();
            res.json(result);
        }
    } catch (error) {
        next(error);
    }
}

export default createChat;
