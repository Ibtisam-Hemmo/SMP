import { userModel } from "../../models/index.js";

const getUser = async (req, res) => {
    const { id } = req.params;

    try {

        const user = await userModel.findById(id);
        if (user) {
            const { password, ...otherInfo } = user._doc;
            res.status(200).json(otherInfo)
        }
        else res.status(404).json({ msg: 'No user is found' });

    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

export default getUser;
