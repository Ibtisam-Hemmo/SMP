import { chatModel } from '../../models/index.js';

const getChat = async (req, res) => {
    const { firstId, secondId } = req.params;

    try {
        const chat = await chatModel.findOne({
            members: { $all: [firstId, secondId] },
        });
        res.json(chat)
    } catch (error) {
        res.status(500).json(error)
    }
};

export default getChat;
