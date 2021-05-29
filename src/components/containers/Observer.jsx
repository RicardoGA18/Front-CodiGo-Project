import React,{useEffect,useContext} from 'react'
import AppContext from '../../context/App/AppContext'
import {errorAlert} from '../../utils/Alerts'
import { apiFetchAuth } from '../../context/services/api'
import { getUserLS , setToken, setUserLS } from '../../context/utils/manageSession'

const Observer = ({children}) => {
  const { error , cleanError , reviewUser , setError } = useContext(AppContext)

  useEffect(() => {
    const verifySession = async () => {
      try {
        const user = getUserLS()
        if(!user){
          reviewUser(null)
          setUserLS(null)
          setToken('')
          return
        }
        const { id } = user
        if(!id){
          reviewUser(null)
          setUserLS(null)
          setToken('')
          return
        }
        const url = `/clients/getById/${id}`
        const { success , content } = await apiFetchAuth(url)
        if(!success){
          reviewUser(null)
          setUserLS(null)
          setToken('')
          return
        }
        const logUser = {
          ...content,
          id: content._id,
          username: `${content.name} ${content.lastName}`,
          img: content.avatar,
        }
        reviewUser(logUser)
        return
      } catch (error) {
        console.log(error)
        setError(error.message)
      }
    }
    verifySession()
  },[])

  useEffect(async ()=>{
    if(error){
      await errorAlert(error)
      cleanError()
    }
  },[error])

  return (
    <>
      {children}
    </>
  )
}

export default Observer