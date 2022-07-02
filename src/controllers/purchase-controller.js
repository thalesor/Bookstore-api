import purchaseService from '../services/purchase-service';
import httpStatus from 'http-status';

export async function purchasesPost(req, res) {
    await purchaseService.createPurchase(req.body);
    
    return res.sendStatus(httpStatus.CREATED);
}

export async function getPurchasesFromUser(req, res) {
    const userId = req.userId;
    const purchases = await purchaseService.getPurchases(userId);
    res.status(httpStatus.OK).send(purchases);
}

export default {
    purchasesPost,
    getPurchasesFromUser
}