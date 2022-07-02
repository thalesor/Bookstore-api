import { Router } from 'express';
import {
  getCategories
} from '../controllers';

const categoryRouter = Router();

categoryRouter.get('/categories', getCategories);

export { categoryRouter };
