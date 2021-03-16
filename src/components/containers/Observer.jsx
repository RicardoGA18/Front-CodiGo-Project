import React,{useEffect,useContext} from 'react'
import AppContext from '../../context/App/AppContext'
import {errorAlert} from '../../utils/Alerts'
import {auth,db} from '../../firebase'

const Observer = ({children}) => {
  const {error,cleanError,reviewUser} = useContext(AppContext)

  useEffect(() => {
    auth.onAuthStateChanged(async user => {
      if(user){
        const snapshot = await db.collection('users').doc(user.uid).get()
        if(snapshot.exists){
          const respond = {
            ...snapshot.data(),
            id: user.uid
          } 
          reviewUser(respond)
        }else{
          const respond = null
          reviewUser(respond)
        }
      }else{
        const respond = null
        reviewUser(respond)
      }
    })
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