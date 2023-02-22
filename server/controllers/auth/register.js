import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

import { userModel } from '../../models/index.js';

const register = async (req, res) => {
    try {
        const registered = await userModel.findOne({ username: req.body.username });
        if (registered) res.status(400).json({ msg: 'There is already an account using this username, try to login instead' })
        else {
            const salt = await bcryptjs.genSalt(10);
            const hashedPassword = await bcryptjs.hash(req.body.password, salt);
            req.body.password = hashedPassword;
            const newUser = userModel(req.body);

            const user = await newUser.save();
            const token = jwt.sign({
                username: user.username,
                id: user._id
            }, process.env.JWT_KEY, { expiresIn: '3h' });

            res
                .status(201)
                .cookie('token', token, { httpOnly: true })
                .json(user)
        }
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

export default register;
