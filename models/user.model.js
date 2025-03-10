import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type : String,
        required : [true,"Username required"],
        trim : true,
        minLength : 2,
        maxLength : 50,
    },
    email : {
        type : String,
        required : [true,"Email required"],
        unique : true,
        trim : true,
        lowercase : true,
        match : [/\S+@\S+\.\S+/,'Please fill a valid email']
    },
    password : {
        type : String,
        required : [true,"Password required"],
        minLength : 6,
    }
},{
    timestamps : true
});

const User = mongoose.model('User',userSchema);

export default User;