import { Router } from 'express';
import userController from '../controllers/user.controller';

const userRouter = Router();

userRouter.post('/', userController.login);

export default userRouter;
