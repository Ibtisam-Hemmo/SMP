import jwt from 'jsonwebtoken';
import { customError } from './index.js';

const verifyToken = (req, res, next) => {
  try {
    const existedToken = req.cookies.token;
    if (!existedToken) throw new customError(400, "You are not authorized!");
    jwt.verify(existedToken, process.env.JWT_KEY, (err, decoded) => {
      if (err) {
        throw new customError("Token is being manipulated!", 400);
      } else {
        req.user = decoded;
        console.log('decoded: ', decoded);
        next();
      }
    })
  } catch (err) {
    next(err);
  }
};

export default verifyToken;
