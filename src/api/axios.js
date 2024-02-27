import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '6abc99ffebf1508d69a98c35768791d0',
    language: 'ko-KR',
  },
})

export default instance
