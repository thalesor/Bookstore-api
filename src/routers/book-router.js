import { Router } from 'express';
import {
  booksPost, getBooks, getBookByTitle
} from '../controllers';
import { authenticateToken } from '../middlewares/authentication-middleware';

const bookRouter = Router();

bookRouter.post('/books', authenticateToken, booksPost);
bookRouter.get('/books', getBooks);
bookRouter.get('books/:title', getBookByTitle);

export { bookRouter };
