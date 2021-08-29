import express, { Request } from 'express'
import { sequelize } from '../models';
import { findExpenses } from '../helper/expense';
import { createApiError } from '../lib/api-error';
import { Span } from '../../types/expenses';

const router = express.Router();

router.get('/', async (req: Request<{span?: 'year' | 'month'}>, res, next) => {
  try {
    console.log('get from route')
    const { span } = req.query
    console.log('req.params', span)
    const sqlResults = await findExpenses(span as Span);
    const expenses = sqlResults;
    return res.status(200).json(expenses)
  } catch(error) {
    console.log(error)
    return next(createApiError('INTERNAL_SERVER_ERROR'));
  }
})

export default router;