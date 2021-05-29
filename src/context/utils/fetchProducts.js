import { apiFetch } from '../services/api'

const fetchProducts = async (categoryId) => {
  try {
    const { success , content } = await apiFetch(`/products/getByCategoryId/${categoryId}`)
    if(success){
      const newContent = content.map(product => {
        return {
          ...product,
          id: product._id
        }
      })
      return newContent
    }
    return new Error(content)
  } catch (error) {
    return new Error(error)
  }
}

export default fetchProducts