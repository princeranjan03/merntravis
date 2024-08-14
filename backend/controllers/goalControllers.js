const asyncHandler = require('express-async-handler');
//@desc: get all goals
// @route GET /api/goals 
// @access Private

const getGoals= asyncHandler(async(req,res)=>{
    res.status(200).json({Message : 'get goals'});
})

//@desc: set all goals
// @route POST /api/goals 
// @access Private

const setGoals= asyncHandler(async(req,res)=>{
    if(!req.body.text){
        res.status(400);
        throw new Error('Please enter text');
    }
    res.status(200).json({Message : 'set goals'});
})

//@desc: update all goals
// @route PUT /api/goals /:id
// @access Private

const updateGoals= asyncHandler(async(req,res)=>{
    res.status(200).json({Message : `update goals ${req.params.id}`});
})

//@desc: delete all goals
// @route DELETE /api/goals /:id
// @access Private

const deleteGoals= asyncHandler(async(req,res)=>{
    res.status(200).json({Message : `delete goals ${req.params.id}`});

})

module.exports = {getGoals,
    setGoals,
    updateGoals,
    deleteGoals

};