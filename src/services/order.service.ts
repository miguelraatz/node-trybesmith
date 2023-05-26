import ProductModel from '../database/models/product.model';
import OrderModel, { OrderSequelizeModel } from '../database/models/order.model';
import sequelize from '../database/models/index';

async function getOrders(): Promise<OrderSequelizeModel[]> {
  const orders = await OrderModel.findAll({
    include: [{
      model: ProductModel,
      as: 'productIds',
      attributes: [],
    }],
    attributes: ['id', 'userId', [sequelize
      .fn('JSON_ARRAYAGG', sequelize.col('productIds.id')), 'productIds']],
    group: ['Order.id'],
    raw: true,
  });

  return orders;
}

export default {
  getOrders,
};
