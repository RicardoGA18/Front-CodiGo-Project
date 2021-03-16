import {googleProvider, auth, db} from '../../firebase'

const signGoogle = async () => {
  try {
    const {user} = await auth.signInWithPopup(googleProvider)
    const snapshot = await db.collection('users').doc(user.uid).get()
    if(snapshot.exists){
      const googleUser = {
        ...snapshot.data(),
        id: snapshot.uid
      }
      return googleUser
    }else{
      const googleUser = {
        name: user.displayName.split(' ')[0],
        lastName: user.displayName.split(' ')[1],
        username: `${user.displayName.split(' ')[0]} ${user.displayName.split(' ')[1]}`,
        img: user.photoURL,
        email: user.email
      }
      await db.collection('users').doc(user.uid).set(googleUser)
      const returnUser = {
        ...googleUser,
        id: user.uid
      }
      return returnUser
    }
  } catch (error) {
    return error.message
  }
}

export default signGoogle