import mongoose from "mongoose";
import bcrypt from 'bcryptjs';

const userSchema = mongoose.Schema({
    name: String,
    lastName: String,
    username: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        unique: true
    },
    age: String,
    password: {
        type: String,
        require: true
    }

})

userSchema.statics.encryptPassword = async (password) => {
const salt = await bcrypt.genSalt(10);
return await bcrypt.hash(password,salt);

}

userSchema.statics.comparePassword = async (password, receivedPassword) => {
return await bcrypt.compare(password,receivedPassword);
    
}

export default mongoose.model("user",userSchema);