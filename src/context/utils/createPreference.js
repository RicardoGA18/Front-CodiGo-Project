import { apiFetchAuth } from '../services/api'

const createPreference = async (preference) => {
  try {
    const { success , content , message } = await apiFetchAuth('/payments/createPreference',preference,'POST')
    if(success){
      return content
    }
    throw new Error(message)
  } catch (error) {
    throw error
  }
}

export default createPreference