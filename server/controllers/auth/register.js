import { userModel } from '../../models/index.js';
import bcryptjs from 'bcryptjs'

const register = async (req, res) => {
    const { username, email, password, firstName, lastName } = req.body;

    try {
        const user = await userModel.findOne({ username: username });
        if (user) res.status(400).json({ msg: 'There is already an account using this username' })
        else {

            const salt = await bcryptjs.genSalt(10);
            const hashedPassword = await bcryptjs.hash(password, salt);
            const newUser = userModel({ username, email, password: hashedPassword, firstName, lastName });

            await newUser.save();
            res.status(200).json({ msg: `user ${newUser.username} is created successfully` })
        }
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

export default register;
