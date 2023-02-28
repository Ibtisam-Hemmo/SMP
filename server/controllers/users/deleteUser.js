import { userModel } from "../../models/index.js";

const deleteUser = async (req, res, next) => {
    const { id } = req.params;
    const { currentUserId, currentAdminStatus } = req.body;
    if (id === currentUserId || currentAdminStatus) {
        try {
            await userModel.findByIdAndDelete(id)
            res.status(200).json({msg: 'User is deleted'})
        } catch (error) {
            next(error)
        }
    } else {
        res.status(403).json({ msg: 'Access denied!! You can only delete your account' })
    }
}
export default deleteUser;
