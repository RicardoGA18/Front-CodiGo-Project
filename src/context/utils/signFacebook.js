import {facebookProvider,auth,db} from '../../firebase'

const signFacebook = async () => {
  try {
    const {user} = await auth.signInWithPopup(facebookProvider)
    const snapshot = await db.collection('users').doc(user.uid).get()
    if(snapshot.exists){
      const facebookUser = {
        ...snapshot.data(),
        id: snapshot.uid
      }
      return facebookUser
    }else{
      const facebookUser = {
        name: user.displayName.split(' ')[0],
        lastName: user.displayName.split(' ')[1],
        username: `${user.displayName.split(' ')[0]} ${user.displayName.split(' ')[1]}`,
        img: user.photoURL,
        email: user.email
      }
      await db.collection('users').doc(user.uid).set(facebookUser)
      const returnUser = {
        ...facebookUser,
        id: user.uid
      }
      return returnUser
    }
  } catch (error) {
    return error.message
  }
}

export default signFacebook