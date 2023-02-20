import { userModel } from "../../models/index.js";

const getAllUsers = async (req, res) => {
    try {
        let users = await userModel.find();
        users = users.map((user) => {
            const { password, ...otherDetails } = user._doc
            return otherDetails
        })
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json(error);
    }
};

export default getAllUsers;
