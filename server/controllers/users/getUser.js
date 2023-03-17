import { userModel } from "../../models/index.js";
import { customError } from "../../utils/index.js";

const getUser = async (req, res, next) => {
    const { id } = req.params;

    try {
        const user = await userModel.findById(id);
        if (user) {
            const { password, ...otherInfo } = user._doc;
            res.json(otherInfo)
        }
        else next(new customError(404, 'No user is found'))
    }
    catch (error) {
        next(error)
    }
}

export default getUser;
