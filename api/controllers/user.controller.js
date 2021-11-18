import user from '../models/user.model.js';

export const createUser = async (req,res) => {

    const {name, lastName, username, email,password, age} = req.body;

    const newUser_uc = new user ({
        name,
        lastName,
        username,
        email,
        age,
        password: await user.encryptPassword(password)
    })

    const userSaved_uc = await newUser_uc.save();

    res.status(201).json(userSaved_uc);

}

export const getUser = async (req,res) => {
    const users = await user.find();
    res.json(users);
    
}

export const getUserByID = async (req,res) => {
const user_ID = await user.findById(req.params.userID);
res.status(200).json(user_ID);
    
}

export const updateUserByID = async (req,res) => {
    const user_UPD = await user.findByIdAndUpdate(req.params.userID, req.body,{new: true});
    
    res.status(200).json(user_UPD);
    
}

export const DeleteUserById = async (req,res) => {
    await user.findByIdAndDelete(req.params.userID);
    
    res.status(204).json;

}