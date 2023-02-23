class CustomError extends Error {
    constructor(status, message) {
        super();
        this.status = status || 500;
        this.message = message || 'Internal server error!';
    }
}

export default CustomError;
