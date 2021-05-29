import { setToken , setUserLS , getUserLS } from './manageSession'
import { apiFetchAuth } from '../services/api'

const verifySession = async () => {
  try {
    const user = getUserLS()
    if(!user){
      setUserLS(null)
      setToken('')
      return null
    }
    const { id } = user
    if(!id){
      setUserLS(null)
      setToken('')
      return null
    }
    const url = `/clients/getById/${id}`
    const { success , content } = await apiFetchAuth(url)
    if(!success){
      setUserLS(null)
      setToken('')
      return null
    }
    const logUser = {
      ...content,
      id: content._id,
      username: `${content.name} ${content.lastName}`,
      img: content.avatar
    }
    return logUser
  } catch (error) {
    console.log(error)
    setUserLS(null)
    setToken('')
    return null
  }
}

export default verifySession