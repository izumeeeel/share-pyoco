import useSWR from 'swr'
import { IFetchedExpense } from '../../types/expenses'
import * as api from '../lib/api/expenses'

interface IUseExpenses {
  data: IFetchedExpense[] | undefined
}

export const useExpenses = (): { data: IUseExpenses | undefined } => {
  const { data } = useSWR('/expenses', () => api.expenses.fetchAll())
  return {
    data
  }
}
