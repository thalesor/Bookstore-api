import categoryRepository from '../../repositories/category-repository';
import { invalidCredentialsError } from './errors';

async function getCategories()
{
   const categories = await categoryRepository.findAll();
   if(!categories) throw invalidCredentialsError;

   return categories;
}
 

export default {
  getCategories
};