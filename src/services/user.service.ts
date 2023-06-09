import bcrypt = require('bcryptjs');
import { ServiceResponse } from '../types/Service.response';
import UserModel from '../database/models/user.model';
import jwtUtils from '../utils/jwt.util';

async function login(username: string, password: string): Promise<ServiceResponse<string>> {
  const user = await UserModel.findOne({ where: { username } });
  if (!user || !bcrypt.compareSync(password, user.dataValues.password)) {
    return { status: 'UNAUTHORIZED', data: { message: 'Username or password invalid' } };
  }
  const token = jwtUtils.sign({ id: user.dataValues.id, username });
  return { status: 'SUCCESS', data: token };
}

export default {
  login,
};
