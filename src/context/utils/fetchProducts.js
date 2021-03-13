import { db } from '../../firebase'

const fetchProducts = async (productId) => {
  try {
    let products = []
    const snapshot = await db.collection('products').where('category.id','==',productId).get()
    snapshot.forEach(doc => {
      const product = {
        ...doc.data(),
        id: doc.id
      }
      products.push(product)
    })
    return products
  } catch (error) {
    return new Error(error)
  }
}

export default fetchProducts