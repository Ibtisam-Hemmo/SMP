import { customError } from "../utils/index.js";

const ErrorMiddleware = (err, req, res, next) => {
    const { status, message } = customError;

    if (!status) {
        res.status(500).json({ msg: message });
    } else {
        res.status(status).json({ msg: message });
    }
};

export default ErrorMiddleware;
