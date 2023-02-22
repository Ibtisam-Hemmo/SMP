import { messageModel } from '../../models/index.js';

const getMsg = async (req, res) => {
    const { chatId } = req.params;
    try {
        const result = await messageModel.find({ chatId });
        res.json(result);
    } catch (error) {
        res.status(500).json(error);
    };
}

export default getMsg;
