import { NextFunction, Request, Response } from 'express';
import jwtUtil from '../utils/jwt.util';
import { User } from '../types/User';
import UserModel from '../database/models/user.model';

async function authMiddleware(req: Request, res: Response, next: NextFunction): Promise<unknown> {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Token é obrigatório' });
  }

  try {
    const decoded = jwtUtil.verify(authorization) as User;
    const host = await UserModel.findOne({ where: { username: decoded.username } });
    if (!host) return res.status(401).json({ message: 'Token inválido' });

    next();
  } catch (e) {
    return res.status(401).json({ message: 'Token inválido' });
  }
}

export default authMiddleware;
