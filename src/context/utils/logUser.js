import { apiFetch } from '../services/api'
import { setUserLS , setToken } from './manageSession'

const logUser = async (user) => {
  const respond = {
    user: null,
    error: null,
  }
  try {
    const { success , content , message } = await apiFetch('/auth/sign-in',user,'POST')
    if(success){
      const logUser = {
        ...content,
        id: content._id,
        username: `${content.name} ${content.lastName}`,
        img: content.avatar
      }
      setUserLS(logUser)
      setToken(content.token)
      respond.user = logUser
      return respond
    }
    respond.error = message
    return respond
  } catch (error) {
    respond.error = error.message
    return respond
  }
}

export default logUser