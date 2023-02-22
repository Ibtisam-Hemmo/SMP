import { chatModel } from '../../models/index.js';

const userChats = async (req, res) => {
    try {
        const chat = await chatModel.find({
            members: { $in: [req.params.userId] },
        });
        res.json(chat);
    } catch (error) {
        res.status(500).json(error);
    }
};

export default userChats;
