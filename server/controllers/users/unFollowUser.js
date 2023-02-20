import { userModel } from '../../models/index.js';

const followUser = async (req, res) => {
    const { id } = req.params;
    const { _id } = req.body;

    if (id === _id) {
        res.status(403).json({ msg: 'Access denied' })
    } else {
        try {
            const followUser = await userModel.findById(id);
            const followingUser = await userModel.findById(_id);

            if (followUser.followers.includes(_id)) {
                await followUser.updateOne({ $pull: { followers: _id } })
                await followingUser.updateOne({ $pull: { following: id } })
                res.status(200).json({ msg: 'User is not followed now' })
            } else {
                res.status(403).json({ msg: 'User is not followed by you' })
            }
        } catch (error) {
            res.status(500).json({ msg: error.message })
        }
    }
}
export default followUser;
