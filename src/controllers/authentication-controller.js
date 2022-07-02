import authenticationService from '../services/authentication-service';
import httpStatus from 'http-status';

export async function singInPost(req, res) {
  const { email, password } = req.body;

  const result = await authenticationService.signIn({ email, password });

  res.status(httpStatus.OK).send(result);
}

export default {
  singInPost
}
