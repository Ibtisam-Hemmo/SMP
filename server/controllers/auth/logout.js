const logout = (req, res) => {
    res.clearCookie('token').json({ msg: 'Logged out successfully' });
}

export default logout;
