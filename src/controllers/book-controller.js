import bookService from '../services/book-service';

export async function booksPost(req, res)
{
    await bookService.createBook(req.body);
  
    return res.sendStatus(httpStatus.CREATED);
}

export async function getBooks(req, res)
{
    const books = await bookService.getBooks();
    return res.send(books);
}

export async function getBookByTitle(req, res)
{
    const { title } = req.params;

    const book = await bookService.getBookByTitle(title);
    return res.send(book);
}

export default {
    booksPost,
    getBookByTitle,
    getBooks
}

