import { db } from '../../firebase'

const fetchCategories = async () => {
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
}

export default fetchCategories