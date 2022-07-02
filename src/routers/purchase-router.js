import { Router } from 'express';
import {
  purchasesPost, getPurchasesFromUser
} from '../controllers';
import { authenticateToken } from '../middlewares/authentication-middleware';

const purchaseRouter = Router();

purchaseRouter.post('/purchases', authenticateToken, purchasesPost);
purchaseRouter.get('/purchases', authenticateToken, getPurchasesFromUser);

export { purchaseRouter };
