import { Router } from 'express';
import login from '../controllers/user.controller';

const userRouter = Router();

userRouter.post('/', login);

export default userRouter;
