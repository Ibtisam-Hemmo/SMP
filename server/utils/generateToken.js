import jwt from 'jsonwebtoken';
import { customError } from './index.js';

const generateToken = (res, payload, user, next) => {
    jwt.sign(
        payload,
        process.env.JWT_KEY,
        { algorithm: "HS256" },
        (err, token) => {
            if (err) {
                next(new customError(401, err));
            } else {
                res.cookie('token', token).json(user)
            }
        }
    )
}
export default generateToken;
