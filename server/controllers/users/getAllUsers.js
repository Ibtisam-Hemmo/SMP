import { userModel } from "../../models/index.js";

const getAllUsers = async (req, res, next) => {
    try {
        let users = await userModel.find();
        users = users.map((user) => {
            const { password, ...otherDetails } = user._doc
            return otherDetails
        })
        res.json(users);
    } catch (error) {
        next(error)
    }
};

export default getAllUsers;
