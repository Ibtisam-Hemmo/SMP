import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
        avatar: String,
        coverPicture: String,
        about: String,
        location: String,
        working: String,
        relationship: String,
        followers: [],
        following: []
    },
    { timestamps: true }
)

const userModel = mongoose.model("users", UserSchema);

export default userModel;
