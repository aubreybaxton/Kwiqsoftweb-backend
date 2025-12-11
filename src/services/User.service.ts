import { NextFunction, Response } from "express";


class UserService {
    async loginUser(res:Response,next:NextFunction) {
        try {
         console.log('something')
         return res.status(200).json({
            status:"success",
            message:"Login successful from service"
         })
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

    async creauserteUser() {
        try {
            
        } catch (error) {
            
        }
    }
}

export default new UserService();