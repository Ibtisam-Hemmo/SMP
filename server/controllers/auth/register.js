import bcryptjs from 'bcryptjs';

import { userModel } from '../../models/index.js';
import { signUpSchema } from '../../validation/index.js';
import { customError, generateToken } from '../../utils/index.js';

const register = async (req, res, next) => {
    try {
        await signUpSchema(req.body)
        const registered = await userModel.findOne({ username: req.body.username });
        if (registered) next(new customError(400, 'There is already an account using this username, try to login instead'))
        else {
            const salt = await bcryptjs.genSalt(10);
            const hashedPassword = await bcryptjs.hash(req.body.password, salt);
            req.body.password = hashedPassword;
            const newUser = userModel(req.body);

            const user = await newUser.save();
            const payload = { username: user.username, id: user._id }
            const { password, ...otherInfo } = user._doc
            generateToken(res, payload, otherInfo, next)
        }
    } catch (error) {
        next(error)
    }
}

export default register;
