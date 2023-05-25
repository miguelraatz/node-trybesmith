import { Request, Response } from 'express';
import productService from '../services/product.service';

async function createProduct(req: Request, res: Response): Promise<Response> {
  const product = req.body;
  const serviceResponse = await productService.createProduct(product);
  return res.status(201).json(serviceResponse);
}

export default {
  createProduct,
};
