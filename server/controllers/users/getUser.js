import { userModel } from "../../models/index.js";

const getUser = async (req, res, next) => {
    const { id } = req.params;

    try {
        const user = await userModel.findById(id);
        if (user) {
            const { password, ...otherInfo } = user._doc;
            res.json(otherInfo)
        }
        else res.status(404).json({ msg: 'No user is found' });
    } catch (error) {
        next(error)
    }
}

export default getUser;
