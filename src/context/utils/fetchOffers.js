import {db} from '../../firebase'

const fetchOffers = async () => {
  try {
    let offers = []
    const snapshot = await db.collection('products').where('discount','>', 0).get()
    snapshot.forEach(doc => {
      let offer = {
        ...doc.data(),
        id: doc.id
      }
      offers.push(offer)
    })
    return offers
  } catch (error) {
    return new Error(error)
  }
}

export default fetchOffers