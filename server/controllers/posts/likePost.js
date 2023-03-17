import { postModel } from '../../models/index.js';
import { customError } from "../../utils/index.js";

const likePost = async (req, res, next) => {
    const { postId } = req.params;
    const { userId } = req.body;

    try {
        const post = await postModel.findById(postId)
        if (post) {
            if (!post.likes.includes(userId)) {
                await post.updateOne({ $push: { likes: userId } })
                res.json({ msg: "post is liked" })
            } else {
                await post.updateOne({ $pull: { likes: userId } })
                res.json({ msg: "post is unLiked" })
            }
        } else next(new customError(400, 'No such post '))
    } catch (error) {
        next(error)
    }
}

export default likePost;
