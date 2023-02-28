const logout = (req, res) => {
    res.clearCookie('token').redirect('/');
}

export default logout;
