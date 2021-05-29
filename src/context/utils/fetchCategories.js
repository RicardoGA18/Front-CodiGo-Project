import { apiFetch } from '../services/api'

const fetchCategories = async () => {
  try {
    const { success , content } = await apiFetch('/categories/getAll')
    if(success){
      const newContent = content.map(category => {
        return {
          ...category,
          id: category._id
        }
      })
      return newContent
    }
    return new Error(content)
  } catch (error) {
    return new Error(error)
  }
  
}

export default fetchCategories