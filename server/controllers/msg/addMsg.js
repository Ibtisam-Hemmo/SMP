import { messageModel } from '../../models/index.js';

const addMsg = async (req, res, next) => {
    const { chatId, senderId, text } = req.body;

    const message = new messageModel({
        chatId,
        senderId,
        text,
    });
    try {
        const result = await message.save();
        res.json(result);
    } catch (error) {
        next(error)
    }
};

export default addMsg;
