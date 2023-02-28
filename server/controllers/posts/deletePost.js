import { postModel } from '../../models/index.js';

const deletePost = async (req, res, next) => {
    const { postId } = req.params;
    const userId = req.body;

    try {
        const post = await postModel.findById(postId)
        if (post.userId === userId) {
            await post.deleteOne(postId)
            res.json({ msg: "post is deleted successfully" })
        } else {
            res.status(403).json({ msg: 'You are only allowed to delete your posts' })
        }
    } catch (error) {
        next(error)
    }
}

export default deletePost;
