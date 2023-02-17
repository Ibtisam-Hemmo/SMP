import { postModel } from '../../models/index.js';

const likePost = async (req, res) => {
    const { postId } = req.params;
    const userId = req.body;

    try {
        const post = await postModel.findById(postId)
        if (!post.likes.includes(userId)) {
            await post.updateOne({ $push: { likes: userId } })
            res.json({ msg: "post is liked" })
        } else {
            await post.updateOne({ $pull: { likes: userId } })
            res.json({ msg: "post is unLiked" })        
        }
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

export default likePost;
