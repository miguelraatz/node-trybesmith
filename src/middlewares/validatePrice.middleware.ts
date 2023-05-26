import { NextFunction, Request, Response } from 'express';

async function validatePrice(req: Request, res: Response, next: NextFunction): Promise<unknown> {
  const { price } = req.body;
  if (!price) {
    return res.status(400).json({ message: '"price" is required' });
  }
  if (typeof price !== 'string') {
    return res.status(422).json({ message: '"price" must be a string' });
  }
  if (price.length <= 2) {
    return res.status(422).json({ message: '"price" length must be at least 3 characters long' });
  }
  return next();
}

export default validatePrice;
