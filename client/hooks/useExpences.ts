import useSWR from 'swr'
import * as api from '../lib/api/expences'

export const useExpences = () => {
  const { data, error } = useSWR('/expences', () => api.expences.fetchAll())
  return {
    data,
    isError: !!error
  }
}
