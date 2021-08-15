import axios from 'axios'

const baseUrl = 'http://127.0.0.1:3002/'

const expences = {
  fetchAll: async () => {
    try {
      return await axios.get(`${baseUrl}expences`)
    } catch (error) {
      console.log('error occured with fetching expences', error)
    }
  }
}

export { expences }
