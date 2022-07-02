import purchaseRepository from '../../repositories/purchase-repository';
import dayjs from "dayjs";

export async function createPurchase(purchaseData) {
	const time = dayjs().locale("pe-tb").format("DD/MM/YY HH:mm");
	const purchases = { ...purchaseData, userId: user._id, date: time };
	const uniqueListOfBooks = uniqByKey(purchases.products, p => p._id);
    await purchaseRepository.create("purchases", purchases);
    /*
			await uniqueListOfBooks.forEach(async (produto) => {
			const removeTotalFromStock = compras.produtos.filter(p => p._id = produto._id).length;
			const returnedProduto = await dbService.find("books", {_id: new ObjectId(`${produto._id}`)});
			if(returnedProduto[0]?.in_stock > 0)
			{
				const toUpdateStock = await dbService.update("books", {_id: new ObjectId(`${produto._id}`)}, {in_stock: returnedProduto[0]?.in_stock-removeTotalFromStock})
			}
        }
    */
}

export async function getPurchases(userId) {
    const purchases = await purchaseRepository.findByUser(userId);

   return purchases;
}

const purchaseService = {
    createPurchase,
	getPurchases
  };
  
  export default purchaseService;
  export * from './errors';
