import { db } from '../../firebase'

const fetchSliders = async () => {
  let sliders = []
  const snapshot = await db.collection('slider').get()
  snapshot.forEach(doc => {
    sliders = doc.data().slides
  })
  return sliders
}

export default fetchSliders