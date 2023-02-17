import { postModel } from '../../models/index.js';

const deletePost = async (req, res) => {
    const { postId } = req.params;
    const userId = req.body;

    try {
        const post = await postModel.findById(postId)
        if (post.userId === userId) {
            await post.deleteOne(postId)
            res.json({ msg: " post is deleted" })
        } else {
            res.status(403).json({ msg: 'You are only allowed to delete your posts' })
        }
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

export default deletePost;
