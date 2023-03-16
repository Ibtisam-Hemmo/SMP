const logout = (req, res, next) => {
    try {
        res.clearCookie('token');
        res.status(200).json({ message: 'Logout successful' });
    } catch (err) {
        next(err)
    }
}

export default logout;
