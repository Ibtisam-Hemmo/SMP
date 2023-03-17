import { postModel } from '../../models/index.js';
import { customError } from "../../utils/index.js";

const deletePost = async (req, res, next) => {
    const { postId } = req.params;
    const { userId } = req.body;

    try {
        const post = await postModel.findById(postId)
        if (post) {
            if (post.userId === userId) {
                await post.deleteOne({ _id: postId })
                res.json({ msg: "post is deleted successfully" })
            } else {
                next(new customError(403, 'You are only allowed to delete your posts'))
            }
        } else {
            next(new customError(400, 'There is no such post'))
        }
    } catch (error) {
        next(error)
    }
}

export default deletePost;
