import { userModel } from '../../models/index.js';

const register = async (req, res) => {
    const { username, email, password, firstName, lastName } = req.body;
    const newUser = userModel({ username, email, password, firstName, lastName });

    try {
        await newUser.save();
        res.status(200).json({ msg: `user ${newUser.username} is created successfully` })
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

export default register;
