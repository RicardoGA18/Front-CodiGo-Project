import {auth,db} from '../../firebase'

const addUser = async (user) => {
  let respond = {
    user: null,
    error: null
  }
  try{
    if(user.pass1 !== user.pass2){
      respond.error = 'Las contraseñas no coinciden'
      return respond
    }
    const responseAuth = await auth.createUserWithEmailAndPassword(user.email,user.pass1)
    let newUser = {
      name: user.name,
      lastName: user.lastName,
      username: `${user.name} ${user.lastName}`,
      email: user.email
    }
    await db.collection('users').doc(responseAuth.user.uid).set(newUser)
    respond.user = {
      ...newUser,
      id: responseAuth.user.uid
    }
    return respond
  }catch(error){
    switch (error.code){
      case 'auth/invalid-email':
        respond.error = 'Formato de email inválido.'
        break
      case 'auth/weak-password':
        respond.error = 'La contraseña debe tener más de 6 caracteres.'
        break
      default:
        respond.error = error.message
    }
    return respond
  }
}

export default addUser