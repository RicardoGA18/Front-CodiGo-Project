import { setUserLS , setToken } from './manageSession'

const signOutUser = () => {
  setUserLS(null)
  setToken('')
  return null
}

export default signOutUser