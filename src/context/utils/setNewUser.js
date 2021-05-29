import { apiFetchAuth } from '../services/api'
import { setUserLS } from './manageSession'

const setNewUser = async (user) => {
  try {
    if(!(!user.img || !user.img.length)){
      const formData = new FormData()
      formData.append('image',user.img[0])
      const {success,message} = await apiFetchAuth(`/clients/uploadAvatar/${user.id}`,formData,'PUT')
      if(!success){
        return message
      }
    }
    const updatedUser = {
      name: user.name,
      lastName: user.lastName,
      email: user.email,
    }
    const { success , content , message } = await apiFetchAuth(`/clients/updateById/${user.id}`,updatedUser,'PUT')
    if(!success){
      return message
    }
    const newUser = {
      ...content,
      id: content._id,
      username: `${content.name} ${content.lastName}`,
      img: content.avatar,
    }
    setUserLS(newUser)
    return newUser
  } catch (error) {
    return error.message
  }
}

export default setNewUser