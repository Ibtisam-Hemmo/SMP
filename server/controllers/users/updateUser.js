import { userModel } from "../../models/index.js";
import bcryptjs from 'bcryptjs';
const updateUser = async (req, res) => {
    const { id } = req.params;
    const { currentUserId, currentUserAdminStatus, password } = req.body;
    if (id === currentUserId || currentUserAdminStatus) {
        try {
            if (password) {
                const salt = await bcryptjs.genSalt(10);
                req.body.password = await bcryptjs.hash(password, salt)
            }
            const user = await userModel.findByIdAndUpdate(id, req.body, { new: true });
            if (user) {
                res.status(200).json(user)
            } else {
                res.status(404).json({ msg: 'no user is found' })
            }
        } catch (error) {
            res.status(500).json({ msg: error.message })
        }
    } else {
        res.status(403).json({ msg: 'Access denied!! You can only update your info' })
    }
}
export default updateUser;
