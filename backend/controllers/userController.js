// @desc   Register a new user
// @access Public
// @route  POST /api/users

const registerUser = ((req,res)=> {
    res.json({message: 'registered user'})

})

// @desc   login a new user
// @access Public
// @route  POST /api/users/login

const loginUser = ((req,res)=> {
    res.json({message: 'login user'})

})

// @desc   get me a new user
// @access Public
// @route  Get /api/users/getme

const getMe = ((req,res)=> {
    res.json({message: 'user data display'})

})



module.exports = {
    registerUser,
    loginUser,
    getMe
}