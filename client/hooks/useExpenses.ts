import useSWR from 'swr'
import * as api from '../lib/api/expenses'

export const useExpenses = () => {
  const { data, error } = useSWR('/expenses', () => api.expenses.fetchAll())
  return {
    data,
    isError: !!error
  }
}
