import { userModel } from '../../models/index.js';

const followUser = async (req, res) => {
    const { id } = req.params;
    const { currentUserId } = req.body;

    if (id === currentUserId) {
        res.status(403).json({ msg: 'Access denied' })
    } else {
        try {
            const followUser = await userModel.findById(id);
            const followingUser = await userModel.findById(currentUserId);

            if (!followUser.followers.includes(currentUserId)) {
                await followUser.updateOne({ $push: { followers: currentUserId } })
                await followingUser.updateOne({ $push: { following: id } })
                res.status(200).json({ msg: 'User is followed' })
            } else {
                res.status(403).json({ msg: 'User is already followed by you' })
            }
        } catch (error) {
            res.status(500).json({ msg: error.message })
        }
    }
}
export default followUser;