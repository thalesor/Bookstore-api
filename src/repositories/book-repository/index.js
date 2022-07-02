import { database } from '../../config/database';
import { ObjectId } from "mongodb";

async function create(data) 
{
    return database.insert("books", data);
}

async function findAll() 
{
    return database.find("books", {});
}

async function findByTitle(title)
{
    return database.find("books", {title: title});
}

async function findById(bookId)
{
    return database.find("books", {_id: new ObjectId(`${bookId}`)});
}

async function update(bookId, updateData)
{
    return database.update("books", {_id: new ObjectId(`${bookId}`)}, updateData);
}

export default {
create,
findAll,
findById,
findByTitle,
update
}
