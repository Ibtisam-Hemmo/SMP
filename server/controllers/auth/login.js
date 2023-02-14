import userModel from '../../models/userModel.js';
import bcryptjs from 'bcryptjs';

const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await userModel.findOne({ username:username });

        if(user){
            const isAuth = await bcryptjs.compare(password, user.password);
            isAuth 
            ? res.status(200).json({msg:'You are logged in'})
            : res.status(400).json({msg:'password is wrong'})
        }else res.status(404).json({msg:'You are not registered, try to sign up instead'})
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
export default login;
