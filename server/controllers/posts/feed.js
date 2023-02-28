import { postModel, userModel } from '../../models/index.js';
import mongoose from 'mongoose';

const feed = async (req, res, next) => {
    const { id } = req.params;
    try {
        const currentUserPosts = await postModel.find({ userId: id });
        const followingPosts = await userModel.aggregate([
            {
                $match: {
                    _id: new mongoose.Types.ObjectId(id),
                },
            },
            {
                $lookup: {
                    from: "posts",
                    localField: "following",
                    foreignField: "userId",
                    as: "followingPosts",
                },
            },
            {
                $project: {
                    followingPosts: 1,
                    _id: 0,
                },
            },
        ]);
        const feedPosts = currentUserPosts.concat(...followingPosts[0].followingPosts)
            .sort((a, b) => b.createdAt - a.createdAt);
        res.json(feedPosts);
    } catch (error) {
        next(error)
    }
}
export default feed;
