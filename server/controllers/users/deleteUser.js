import { userModel } from "../../models/index.js";

const deleteUser = async (req, res) => {
    const { id } = req.params;
    const { currentUserId, currentAdminStatus } = req.body;
    if (id === currentUserId || currentAdminStatus) {
        try {
            await userModel.findByIdAndDelete(id)
            res.status(200).json({msg: 'User is deleted'})
        } catch (error) {
            res.status(500).json({ msg: error.message })
        }
    } else {
        res.status(403).json({ msg: 'Access denied!! You can only delete your account' })
    }
}
export default deleteUser;
