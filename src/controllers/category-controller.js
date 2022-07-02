import categoryService from '../services/category-service';

export async function getCategories(req, res)
{
    const categories = await categoryService.getCategories();
    return res.send(categories);
}

export default {
    getCategories
}
