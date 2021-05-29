import { apiFetch } from '../services/api'

const fetchLatest = async () => {
  try {
    const { success , content , message } = await apiFetch('/products/getLatest')
    if(success){
      const newContent = content.map(product => {
        return {
          ...product,
          id: product._id
        }
      })
      return newContent
    }
    return new Error(message)
  } catch (error) {
    return new Error(error)
  }
}

export default fetchLatest