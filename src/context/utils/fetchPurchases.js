import { apiFetchAuth } from '../services/api'

const fetchPurchases = async (userId) => {
  try {
    const { success , content , message } = await apiFetchAuth(`/payments/getPurchasesByUserId/${userId}`) 
    if(success){
      return content
    }
    throw new Error(message)
  } catch (error) {
    throw error
  }
}

export default fetchPurchases