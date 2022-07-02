import { database } from '../../config/database';

async function create(data) 
{
    return database.insert("purchases", data);
}

async function findByUser(userId) 
{
    return dbService.find("purchases", { userId: userId });
}

export default {
  create,
  findByUser
};
