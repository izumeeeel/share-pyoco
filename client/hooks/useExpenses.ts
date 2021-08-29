import useSWR from 'swr'
import { IFetchedSpanExpense, Span } from '../../types/expenses'
import * as api from '../lib/api/expenses'

interface IUseExpenses {
  data: IFetchedSpanExpense[] | undefined
}

export const useExpenses = (
  span: Span | undefined
): { data: IUseExpenses | undefined } => {
  const { data } = useSWR(`/expenses:${span}`, () =>
    api.expenses.fetchAll(span)
  )
  return {
    data
  }
}
