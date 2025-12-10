import User from "../models/user.models";
import bcryptjs from "bcryptjs";

export const LoginUser= async(req, res)=>{
    try {
        const{email, password}= req.body;
        const loginUsername = await User.findOne({ email }).select('+password');
        if (!loginUsername) {
            return res.status(400).json({ loginMessage: 'User does not exist' });
        }
        const isPasswordMatch = await bcryptjs.compare(password, loginUsername.password);
            if (!isPasswordMatch) {
                return res.status(400).json({ loginMessage: 'Invalid credentials' });
            }
        
    } catch (error) {
        console.error('Error in LoginUser:', error);
        res.status(500).json({message:'Server Error', error:error.message})
    }
}