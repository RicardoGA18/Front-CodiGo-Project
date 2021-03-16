import {auth} from '../../firebase' 

const signOutUser = async () => {
  try {
    await auth.signOut()
    return null
  } catch (error) {
    return error.message
  }
}

export default signOutUser