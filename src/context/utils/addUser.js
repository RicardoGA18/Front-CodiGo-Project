import {auth} from '../../firebase'

const addUser = async (user) => {
  try{
    if(user.pass1 !== user.pass2){
      return 'Las contraseñas no coinciden.'
    }
  }catch(error){
    return new Error(error)
  }
}

export default addUser