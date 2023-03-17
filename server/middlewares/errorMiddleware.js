import { customError } from "../utils/index.js";

const ErrorMiddleware = (err, req, res, next) => {
    if (!(err instanceof customError)) {
        return res.status(500).json({ msg: 'Internal server error.' });
    }
    else {
        const { status, message } = err;
        if (Array.isArray(message)) {
            res.status(status).json({ errors: message });
        } else {
            res.status(status).json({ msg: message });
        }
    }
};

export default ErrorMiddleware;
