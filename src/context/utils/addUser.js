import { apiFetch } from '../services/api'
import { setToken , setUserLS } from './manageSession'

const addUser = async (user) => {
  const respond = {
    user: null,
    error: null,
  }
  try {
    if(user.pass1 !== user.pass2){
      respond.error = 'Las contraseñas no coinciden'
      return respond
    }
    const userToSend = {
      name: user.name,
      lastName: user.lastName,
      password: user.pass1,
      email: user.email,
    }
    const { success , content , message } = await apiFetch('/auth/sign-up',userToSend,'POST')
    if(success){
      const newUser = {
        ...content,
        id: content._id,
        username: `${content.name} ${content.lastName}`,
        img: content.avatar
      }
      setUserLS(newUser)
      setToken(content.token)
      respond.user = newUser
      return respond
    }
    respond.error = message
    return respond
  } catch (error) {
    respond.error = error.message
    return respond
  }
}

export default addUser