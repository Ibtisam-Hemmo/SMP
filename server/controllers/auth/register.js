import bcryptjs from 'bcryptjs';

import { userModel } from '../../models/index.js';
import { signUpSchema } from '../../validation/index.js';
import { customError, generateToken } from '../../utils/index.js';

const register = async (req, res, next) => {
    try {
        await signUpSchema(req.body)
        const registered = await userModel.findOne({ username: req.body.username });
        if (registered) res.status(400).json({ msg: 'There is already an account using this username, try to login instead' })
        else {
            const salt = await bcryptjs.genSalt(10);
            const hashedPassword = await bcryptjs.hash(req.body.password, salt);
            req.body.password = hashedPassword;
            const newUser = userModel(req.body);

            const user = await newUser.save();
            const payload = { username: user.username, id: user._id }
            const token = generateToken(payload)
            console.log('token: ', token);
            res
                .status(201)
                .cookie('token', token)
                .json(user)
        }
    } catch (error) {
        if (error.name === 'ValidationError') {
            next(new customError(400, error.errors));
        }
        else {
            next(error)
        }
    }
}

export default register;
