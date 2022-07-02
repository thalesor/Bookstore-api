import { database } from '../../config/database';

async function create(data) 
{
    return database.insert("sessions", data);
}

export default {
  create
};
