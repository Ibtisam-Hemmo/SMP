import bcryptjs from 'bcryptjs';

import { userModel } from "../../models/index.js";
import generateToken from "../../utils/generateToken.js";
import { customError } from "../../utils/index.js";

const updateUser = async (req, res, next) => {
    const { id } = req.params;
    const { _id, password } = req.body;

    if (id === _id) {
        try {
            if (password) {
                const salt = await bcryptjs.genSalt(10);
                req.body.password = await bcryptjs.hash(password, salt)
            }
            const user = await userModel.findByIdAndUpdate(id, req.body, { new: true });
            if (user) {
                const { password, ...otherInfo } = user._doc;
                const payload = { username: user.username, id: user._id }
                generateToken(res, payload, otherInfo, next)
            } else {
                next(new customError(404, 'no user is found'))
            }
        } catch (error) {
            next(error)
        }
    } else {
        next(new customError(403, 'Access denied!! You can only update your info'))
    }
}
export default updateUser;
