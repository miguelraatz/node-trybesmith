import { Request, Response } from 'express';
import productService from '../services/product.service';

async function createProduct(req: Request, res: Response): Promise<Response> {
  const product = req.body;
  const serviceResponse = await productService.createProduct(product);
  return res.status(201).json(serviceResponse);
}

async function getProducts(_req: Request, res: Response): Promise<Response> {
  const products = await productService.getProducts();
  return res.status(200).json(products);
}

export default {
  createProduct,
  getProducts,
};
