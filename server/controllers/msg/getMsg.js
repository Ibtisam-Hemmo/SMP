import { messageModel } from '../../models/index.js';

const getMsg = async (req, res, next) => {
    const { chatId } = req.params;
    try {
        const result = await messageModel.find({ chatId });
        res.json(result);
    } catch (error) {
        next(error)
    };
}

export default getMsg;
