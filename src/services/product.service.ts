import ProductModel from '../database/models/product.model';
import { Product } from '../types/Product';

type ProductWithoutId = Omit<Product, 'id'>;

async function createProduct(product: Product): Promise<ProductWithoutId> {
  const createdProduct = await ProductModel.create(product);
  return createdProduct.dataValues;
}

async function getProducts(): Promise<Product[]> {
  const products = await ProductModel.findAll();
  return products.map((product) => product.dataValues);
}

export default {
  createProduct,
  getProducts,
};
