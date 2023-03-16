import { userModel } from "../../models/index.js";
import bcryptjs from 'bcryptjs';
import generateToken from "../../utils/generateToken.js";

const updateUser = async (req, res, next) => {
    const { id } = req.params;
    const { _id, password } = req.body;
    
    if (id === _id ) {
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
                res.status(404).json({ msg: 'no user is found' })
            }
        } catch (error) {
            next(error)
        }
    } else {
        res.status(403).json({ msg: 'Access denied!! You can only update your info' })
    }
}
export default updateUser;
