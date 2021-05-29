import { apiFetch }  from '../services/api'

const fetchProduct = async (productId) => {
  try {
    const { success , content } = await apiFetch(`/products/getById/${productId}`)
    if(success){
      const newContent = {
        ...content,
        id: content._id
      }
      return newContent
    }
    return new Error(content)
  } catch (error) {
    return new Error(error)
  }
}

export default fetchProduct