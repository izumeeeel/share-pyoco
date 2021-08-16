import axios from 'axios'
import { IFetchedExpense } from '../../../types/expenses'

const baseUrl = 'http://127.0.0.1:3002/'

const expenses = {
  fetchAll: async (): Promise<{ data: IFetchedExpense[] } | undefined> => {
    try {
      console.log('res', await axios.get(`${baseUrl}expenses`))
      return await axios.get(`${baseUrl}expenses`)
    } catch (error) {
      console.log('error occured with fetching expenses', error)
    }
  }
}

export { expenses }
