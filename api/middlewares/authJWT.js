import jwt  from "jsonwebtoken";
import config from "../config/config.js";
import user from "../models/user.model.js";

export const verifyToken = async(req,res,next) =>{
try {
    const token = req.headers["x-acces-token"];

    if (!token) return  res.status(403).json({message: "No token provied"});

    const decoded = jwt.verify(token,config.SECRET);
    req.userId = decoded.id;

    const user_auth = await user.findById(req.userId, {password: 0});
    if(!user_auth) return   res.status(404).json({message: "No user found"});

    next()
} catch (error) {
    return  res.status(401).json({message: "Unauthorized"});    
}

}