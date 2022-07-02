import { Router } from 'express';

import { createUserSchema } from '../schemas/users-schemas';
import { validateBody } from '../middlewares/validation-middleware';
import { usersPost } from '../controllers';

const userRouter = Router();

userRouter.post('/users', validateBody(createUserSchema), usersPost);

export { userRouter };
