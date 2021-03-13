import { db } from '../../firebase'

const fetchProduct = async (id) => {
  try {
    const snapshot = await db.collection('products').doc(id).get()
    const product = {
      ...snapshot.data(),
      id: snapshot.id
    }
    return product
  } catch (error) {
    return new Error(error)
  }
}

export default fetchProduct