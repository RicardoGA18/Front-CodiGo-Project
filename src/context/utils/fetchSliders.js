import { db } from '../../firebase'

const fetchSliders = async () => {
  try {
    let sliders = []
    const snapshot = await db.collection('slider').get()
    snapshot.forEach(doc => {
      sliders = doc.data().slides
    })
    return sliders
  } catch (error) {
    return new Error(error)
  }
  
}

export default fetchSliders