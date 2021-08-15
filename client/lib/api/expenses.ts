import axios from 'axios'

const baseUrl = 'http://127.0.0.1:3002/'

const expenses = {
  fetchAll: async () => {
    try {
      return await axios.get(`${baseUrl}expenses`)
    } catch (error) {
      console.log('error occured with fetching expenses', error)
    }
  }
}

export { expenses }
