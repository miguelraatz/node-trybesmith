import { Request, Response } from 'express';
import userService from '../services/user.service';

async function login(req: Request, res: Response): Promise<Response> {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: '"username" and "password" are required' });
  }
  
  const userLogin = await userService.login(username, password);
  if (userLogin.status === 'UNAUTHORIZED') {
    return res.status(401).json(userLogin.data);
  }

  return res.status(200).json({ token: userLogin.data });
}

export default {
  login,
};
