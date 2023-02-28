import { chatModel } from '../../models/index.js';

const getChat = async (req, res, next) => {
    const { firstId, secondId } = req.params;

    try {
        const chat = await chatModel.findOne({
            members: { $all: [firstId, secondId] },
        });
        res.json(chat)
    } catch (error) {
        next(error)
    }
};

export default getChat;
