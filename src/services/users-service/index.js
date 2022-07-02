import userRepository from '../../repositories/user-repository';
import bcrypt from 'bcrypt';
import { duplicatedEmailError } from './errors';

export async function createUser({ email, password }) {

  await validateUniqueEmailOrFail(email);

  const hashedPassword = await bcrypt.hash(password, 12);
  return userRepository.create({
    email,
    password: hashedPassword,
  });
}

async function validateUniqueEmailOrFail(email) {
  const userWithSameEmail = await userRepository.findByEmail(email);
  if (userWithSameEmail) {
    throw duplicatedEmailError();
  }
}

const userService = {
  createUser,
};

export * from './errors';
export default userService;
