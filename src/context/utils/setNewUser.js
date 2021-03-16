import { db , storage } from '../../firebase' 

const setNewUser = async (user) => {
  try {
    if(!user.img || !user.img.length){
      user.img = null
    }else{
      const refAvatarStorage = storage.ref(`avatars/${user.img[0].name}`)
      const urlAvatar = await subirAvatar(user.img[0],refAvatarStorage)
      user.img = urlAvatar
    }
    await db.collection('users').doc(user.id).set({
      name: user.name,
      lastName: user.lastName,
      username: `${user.name} ${user.lastName}`,
      img: user.img,
      email: user.email
    })
    return {
      name: user.name,
      lastName: user.lastName,
      username: `${user.name} ${user.lastName}`,
      img: user.img,
      email: user.email,
      id: user.id
    }
  } catch (error) {
    return error.message
  }
}

const subirAvatar = (imagen,refStorage) => {
  return new Promise((resolve, reject) => {
    const tarea = refStorage.put(imagen)
    tarea.on(
      'state_changed',
      () => {},//aqui iría una función que observa la subida de mi archivo
      (error) => {reject(error)}, //aqui manejamos si es que recibimos un error, por eso hace un reject
      () => { //aqui ya podemos inspeccionar cuando el archivo ha terminado de subirse a firebase
        tarea.snapshot.ref.getDownloadURL()
        .then(urlImagen => resolve(urlImagen))
      }
    )
  })
}

export default setNewUser