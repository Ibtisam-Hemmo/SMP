import { postModel } from '../../models/index.js';

const createPost = async (req, res, next) => {
    const newPost = new postModel(req.body);
    try {
        newPost.save();
        res.json(newPost)
    } catch (error) {
        next(error)
    }
}

export default createPost;
