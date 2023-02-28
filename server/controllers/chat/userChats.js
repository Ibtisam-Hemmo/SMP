import { chatModel } from '../../models/index.js';

const userChats = async (req, res, next) => {
    try {
        const chat = await chatModel.find({
            members: { $in: [req.params.userId] },
        });
        res.json(chat);
    } catch (error) {
        next(error)
    }
};

export default userChats;
