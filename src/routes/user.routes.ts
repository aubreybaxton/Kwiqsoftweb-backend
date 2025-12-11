import express from 'express';
import UsersController from '../controller/Users.controller';

const userRouter = express.Router();

userRouter.get('/login', UsersController.loginUser);

export { userRouter };