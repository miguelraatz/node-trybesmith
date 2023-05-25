export type Order = {
  id: number;
  userId: number;
  productId?: number;
};

export type OrderReturn = {
  id: number;
  userId: number;
  productId?: number[];
};
