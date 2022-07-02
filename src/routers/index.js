import { Router } from "express";
import { userRouter } from "./user-router";
import { authenticationRouter } from "./authentication-router";
import { bookRouter } from "./book-router";
import { categoryRouter } from "./category-router";
import { purchaseRouter } from "./purchase-router";

const router = Router();
router.use(userRouter);
router.use(authenticationRouter);
router.use(categoryRouter);
router.use(bookRouter);
router.use(purchaseRouter);


export default router;
