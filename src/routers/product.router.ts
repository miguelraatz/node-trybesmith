import { Router } from 'express';
import productController from '../controllers/product.controller';
import validateName from '../middlewares/validateName.middleware';
import validatePrice from '../middlewares/validatePrice.middleware';

const productRouter = Router();

productRouter.post('/', validateName, validatePrice, productController.createProduct);

productRouter.get('/', productController.getProducts);

export default productRouter;
