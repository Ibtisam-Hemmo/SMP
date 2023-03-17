import { userModel } from '../../models/index.js';
import { customError } from "../../utils/index.js";

const followUser = async (req, res, next) => {
    const { id } = req.params;
    const { _id } = req.body;

    if (id === _id) {
        next(new customError(403, 'Access denied'))
    } else {
        try {
            const followUser = await userModel.findById(id);
            const followingUser = await userModel.findById(_id);

            if (!followUser.followers.includes(_id)) {
                await followUser.updateOne({ $push: { followers: _id } })
                await followingUser.updateOne({ $push: { following: id } })
                res.json({ msg: 'User is now followed' })
            } else {
                await followUser.updateOne({ $pull: { followers: _id } })
                await followingUser.updateOne({ $pull: { following: id } })
                res.json({ msg: 'User is now unFollowed' })
            }
        } catch (error) {
            next(error)
        }
    }
}
export default followUser;
