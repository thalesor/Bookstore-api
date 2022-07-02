import bookRepository from '../../repositories/book-repository';
import { invalidCredentialsError } from './errors';

async function createBook(bookData)
{
    await validateUniqueTitleOrFail(title);

    return await bookRepository.create(bookData);
}

async function getBooks()
{
   const books = await bookRepository.findAll();
   if(!books) throw invalidCredentialsError;

   return books;
}

async function getBookByTitle(title)
{
    const book = await bookRepository.findByTitle(title);

    return book;
}

async function validateUniqueTitleOrFail(title)
{
    const book = await getBookByTitle(title);
    if(book) throw invalidCredentialsError;
}

  export default {
    createBook,
    getBooks,
    getBookByTitle
  };
