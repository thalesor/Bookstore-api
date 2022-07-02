import { database } from '../../config/database';

async function create(data) 
{
    return database.insert("categories", data);
}

async function findAll() 
{
    return database.find("categories", {});
}

export default {
  create,
  findAll
};
