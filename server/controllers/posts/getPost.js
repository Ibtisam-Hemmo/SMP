import { postModel } from '../../models/index.js';

const getPost = async (req, res, next) => {
    const { id } = req.params;
    try {
        const post = await postModel.findById(id)
        res.json(post);
    } catch (error) {
        next(error)
    }
}

export default getPost;
