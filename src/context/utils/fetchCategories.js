import { db } from '../../firebase'

const fetchCategories = async () => {
  try {
    let categories = []
    const snapshot = await db.collection('categories').get()
    snapshot.forEach(doc => {
      let category = {
        ...doc.data(),
        id: doc.id
      }
      categories.push(category)
    })
    return categories
  } catch (error) {
    return new Error(error)
  }
  
}

export default fetchCategories