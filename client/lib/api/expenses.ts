import axios from 'axios'
import { IFetchedSpanExpense, Span } from '../../../types/expenses'

const baseUrl = 'http://127.0.0.1:3002/'

const expenses = {
  fetchAll: async (
    span?: Span
  ): Promise<{ data: IFetchedSpanExpense[] } | undefined> => {
    console.log('params span', span)
    try {
      const res = await axios.get(`${baseUrl}expenses`, {
        params: { span }
      })
      console.log(res.data)
      return res
    } catch (error) {
      console.log('error occured with fetching expenses', error)
    }
  }
}

export { expenses }
