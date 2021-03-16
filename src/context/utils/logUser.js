import {auth,db} from '../../firebase'

const logUser = async (user) => {
  let respond = {
    user: null,
    error: null
  }
  try {
    const responseAuth = await auth.signInWithEmailAndPassword(user.email,user.password)
    const snapshot = await db.collection('users').doc(responseAuth.user.uid).get()
    respond.user = {
      ...snapshot.data(),
      id: responseAuth.user.uid
    }
    return respond
  } catch (error) {
    switch(error.code){
      case 'auth/wrong-password':
        respond.error = 'Contraseña incorrecta'
        break
      case 'auth/user-not-found':
        respond.error = 'Email no encontrado'
        break
      default:
        respond.error = error.message
    }
    return respond
  }
}

export default logUser