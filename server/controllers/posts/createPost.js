import { postModel } from '../../models/index.js';

const createPost = async (req, res) => {
    const newPost = new postModel(req.body);
    try {
        newPost.save();
        res.json(newPost)

    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

export default createPost;
