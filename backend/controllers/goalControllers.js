const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const Goal = require('../models/goalModel');
 
//@desc: get all goals
// @route GET /api/goals 
// @access Private

const getGoals= asyncHandler(async(req,res)=>{
   const goals = await Goal.find({user: req.user._id}); 
    res.status(200).json(goals);
})

//@desc: set all goals
// @route POST /api/goals 
// @access Private

const setGoals= asyncHandler(async(req,res)=>{
    
    if(!req.body.text){
        res.status(400);
        throw new Error('Please enter text');
    }
    console.log(req.body.text);
    console.log(req.user._id);
    const goal = await Goal.create({
        text: req.body.text,
        user: req.user._id
    })
    res.status(200).json(goal);
})

//@desc: update all goals
// @route PUT /api/goals /:id
// @access Private

const updateGoals= asyncHandler(async(req,res)=>{
    const goal = await Goal.findById(req.params.id);
    if(!goal){
        res.status(404);
        throw new Error('Goal not found');
    }

 
    const user = await User.findById(req.user._id);
    // check if the user is the owner of the goal
    if(!user){
        res.status(401);
        throw new Error('User not found');
    }
    //make sure the user is the owner of the goal
    if(goal.user.toString() !== user._id){
        res.status(401);
        throw new Error('Not authorized to update the goal');
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body,{
        new : true,
    })
    res.status(200).json(updatedGoal);
})

//@desc: delete all goals
// @route DELETE /api/goals /:id
// @access Private

const deleteGoals= asyncHandler(async(req,res)=>{
    const goal = await Goal.findById(req.params.id);
    console.log(goal);
    if(!goal){
        res.status(404);
        throw new Error('Goal not found');
    }

    const user = await User.findById(req.user._id);
    // check if the user is the owner of the goal
    // console.log(user);
    if(!user){
        res.status(401);
        throw new Error('User not found');
    }
    //make sure the user is the owner of the goal
    if(goal.user.toString() != user._id.toString()){
        res.status(401);
        throw new Error('Not authorized to update the goal');
    }
   const deletedGoal = await Goal.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedGoal);

})

module.exports = {getGoals,
    setGoals,
    updateGoals,
    deleteGoals

};