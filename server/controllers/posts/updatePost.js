import { postModel } from '../../models/index.js';

const updatePost = async (req, res) => {
    const { postId } = req.params;
    const userId = req.body;
    
    try {
        const post = await postModel.findById(postId)
        if (post.userId !== userId) {
            await post.updateOne({ $set: req.body })
            res.status(200).json({ msg: " post is updated" })
        } else {
            res.status(403).json({ msg: 'You are only allowed to update your posts' })
        }
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

export default updatePost;
