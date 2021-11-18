import user from "../models/user.model.js"

export const checkDuplicateUsernameorEmail = async (req,res, next ) => {

const user_VS = await user.findOne({username: req.body.username});

if(user_VS) return res.status(400).json({message: "The user already exists"});

const email_VS = await user.findOne({email: req.body.email});

if(email_VS) return res.status(400).json({message: "The email already exists"});

next();
}