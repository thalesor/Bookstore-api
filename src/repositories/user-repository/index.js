import { database } from '../../config/database';
import { ObjectId } from "mongodb";

async function findByEmail(email) {

  return database.find("users", { email: email });

}

async function create(data) {

  return database.insert("users", data);

}

async function findById(id) {
  
  return database.find("users", {_id: new ObjectId(`${id}`)});

}

export default {
  findByEmail,
  create,
  findById,
};
