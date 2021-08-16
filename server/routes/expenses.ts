import express from 'express'
import { sequelize } from '../models';
import { findYealyExpenses } from '../helper/expense';
import { createApiError } from '../lib/api-error';

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    console.log('get from route')
    const sqlResults = await findYealyExpenses();
    const expenses = sqlResults;
    return res.status(200).json(expenses)
  } catch(error) {
    console.log(error)
    return next(createApiError('INTERNAL_SERVER_ERROR'));
  }
})

export default router;