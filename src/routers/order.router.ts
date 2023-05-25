import { Router } from 'express';
import orderControler from '../controllers/order.controller';

const orderRouter = Router();

orderRouter.get('/', orderControler.getOrders);

export default orderRouter;
