import bcryptjs from 'bcryptjs';
import mongoose from 'mongoose';

const userSchema= new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        minlength:3
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
        // match:[/^\S+@\S+\.\S+$/,'Please use a valid email address.']
    },
    password:{
        type:String,
        required:true,
        minlength:8,
    },
    role:{
        type:String,
        enum:['user','admin'],
        default:'user'
    }
},{timestamps:true})

userSchema.pre('save', async function() {
    this.password= await bcryptjs.hash(this.password,10)
    
});

const User= mongoose.model('User',userSchema);

export default User;