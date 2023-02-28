import { postModel } from '../../models/index.js';

const updatePost = async (req, res, next) => {
    const { postId } = req.params;
    const userId = req.body;
    
    try {
        const post = await postModel.findById(postId)
        if (post.userId !== userId) {
            await post.updateOne({ $set: req.body })
            res.json({ msg: " post is updated" })
        } else {
            res.status(403).json({ msg: 'You are only allowed to update your posts' })
        }
    } catch (error) {
        next(error)
    }
}

export default updatePost;
