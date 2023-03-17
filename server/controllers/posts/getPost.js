import { postModel } from '../../models/index.js';
import { customError } from "../../utils/index.js";

const getPost = async (req, res, next) => {
    const { id } = req.params;
    try {
        const post = await postModel.findById(id);
        if (post) {

            res.json(post);
        } else next(new customError(400, 'No such post '))

    } catch (error) {
        next(error)
    }
}

export default getPost;
