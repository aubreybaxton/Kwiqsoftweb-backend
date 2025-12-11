import { NextFunction, Request, Response } from "express";
import UserService from "../services/User.service";

//

// export const LoginUser = async (req: Request, res: Response) => {
//     try {
//         const { email, password } = req.body;
//         const loginUsername = await User.findOne({ email }).select('+password');
//         if (!loginUsername) {
//             return res.status(400).json({ loginMessage: 'User does not exist' });
//         }
//         const isPasswordMatch = await bcryptjs.compare(password, loginUsername.password);
//         if (!isPasswordMatch) {
//             return res.status(400).json({ loginMessage: 'Invalid credentials' });
//         }
//         const jwtToken = jwt.sign({ id: loginUsername._id }, process.env.JWT_SECRET_TOKEN, { expiresIn: '15d' })

//         res.cookie('jwtToken', jwtToken, {
//             domain: ".localhost",
//             secure: process.env.NODE_ENV !== "development",
//             httpOnly: true,
//             sameSite: 'lax',
//             maxAge: 1000 * 60 * 60 * 24 * 15,
//         })

//         res.status(200).json({
//             message: 'Login successful',
//             success: true,
//             user: {
//                 id: loginUsername._id,
//                 email: loginUsername.email,
//                 role: loginUsername.role,
//             }
//         })

//     } catch (error) {
//         console.error('Error in LoginUser:', error);
//         res.status(500).json({ message: 'Server Error', error: error.message })
//     }
// }


class UserController  {
async loginUser(req: Request, res: Response, next:NextFunction) {
    await UserService.loginUser(res,next);
}
}

export default new UserController();