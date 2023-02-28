import jwt from 'jsonwebtoken';
import { customError } from './index.js';

const verifyToken = (req, res, next) => {
  try {
    const existedToken = req.cookies.token;
    if (!existedToken) next(new customError(400, "You are not authorized!"));
    jwt.verify(existedToken, process.env.JWT_KEY, (err, decoded) => {
      if (err) {
        next(new customError(400, "Token is being manipulated!"));
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
