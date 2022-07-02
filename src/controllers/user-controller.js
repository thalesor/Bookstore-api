import userService from '../services/users-service';
import httpStatus from 'http-status';

export async function usersPost(req, res) {
  const { email, password } = req.body;

  const user = await userService.createUser({ email, password });
  res.status(httpStatus.CREATED).json({
    id: user.id,
    email: user.email,
  });
}

export default {
  usersPost
}
