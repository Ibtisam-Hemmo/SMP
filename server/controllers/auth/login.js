import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

import userModel from '../../models/userModel.js';
import { loginSchema } from '../../validation/index.js'
import { customError } from '../../utils/index.js';

const login = async (req, res, next) => {
    const { username, password } = req.body;

    try {
        await loginSchema(username, password)
        const user = await userModel.findOne({ username: username });

        if (user) {
            const isAuth = await bcryptjs.compare(password, user.password);
            const token = jwt.sign({
                username: user.username,
                id: user._id
            }, process.env.JWT_KEY, { expiresIn: '3h' });

            isAuth
                ? res.cookie('token', token).json(user)
                : res.status(400).json({ msg: 'password is wrong' })
        }
        else res.status(404).json({ msg: 'You are not registered, try to sign up instead' })
    } catch (error) {
        if (error.name === 'ValidationError') {
            next(new customError(400, error.errors));}
        else{
            next(error)
        } 
    }
}
export default login;
