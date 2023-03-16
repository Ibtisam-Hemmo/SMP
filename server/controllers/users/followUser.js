import { userModel } from '../../models/index.js';

const followUser = async (req, res, next) => {
    const { id } = req.params;
    const { _id } = req.body;

    if (id === _id) {
        res.status(403).json({ msg: 'Access denied' })
    } else {
        try {
            const followUser = await userModel.findById(id);
            const followingUser = await userModel.findById(_id);

            if (!followUser.followers.includes(_id)) {
                await followUser.updateOne({ $push: { followers: _id } })
                await followingUser.updateOne({ $push: { following: id } })
                res.json({ msg: 'User is followed' })
            } else {
                await followUser.updateOne({ $pull: { followers: _id } })
                await followingUser.updateOne({ $pull: { following: id } })
            }
        } catch (error) {
            next(error)
        }
    }
}
export default followUser;
