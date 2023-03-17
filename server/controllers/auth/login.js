import bcryptjs from 'bcryptjs';

import userModel from '../../models/userModel.js';
import { loginSchema } from '../../validation/index.js'
import { customError, generateToken } from '../../utils/index.js';

const login = async (req, res, next) => {
    const { username, password } = req.body;

    try {
        await loginSchema(username, password)
        const user = await userModel.findOne({ username: username });

        if (user) {
            const isAuth = await bcryptjs.compare(password, user.password);
            if (isAuth) {
                const payload = { username: user.username, id: user._id }
                const { password, ...otherInfo } = user._doc
                generateToken(res, payload, otherInfo, next)
            }
            else next(new customError(401, 'password is wrong'));
        }
        else next(new customError(404, 'You are not registered, try to sign up instead'));
    } catch (error) {
            next(error)
        
    }
}
export default login;
