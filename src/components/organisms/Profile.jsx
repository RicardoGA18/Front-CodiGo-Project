import React,{useState,useContext,useEffect} from 'react'
import AppContext from '../../context/App/AppContext'
import {openModalCharge,closeModalCharge} from '../../utils/Alerts'
import {useParams} from 'react-router-dom'
import Swal from 'sweetalert2'

const Profile = () => {
  const {user,updateUser} = useContext(AppContext)
  const [newUser,setNewUser] = useState({
    name: '',
    lastName: '',
    img: null,
    email: ''
  })

  useEffect(() => {
    const {id} = useParams()
    setNewUser({
      name: user.name,
      lastName: user.lastName,
      img: null,
      email: user.email,
      id: user.id || id
    })
  },[])

  const setImage = () => {
    if(!newUser.img || !newUser.img.length){
      if(user.img){
        return <img src={user.img} alt="Foto de perfil"/>
      }
      return (
        <p>{user.name[0]}{user.lastName[0]}</p>
      )
    }else{
      const urlImg = URL.createObjectURL(newUser.img[0])
      return <img src={urlImg}/>
    }
  }

  const manageImage = e => {
    setNewUser({
      ...newUser,
      img: e.target.files
    })
  }

  const manageInput = e => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    })
  }

  const manageSubmit = async e => {
    const {id} = useParams()
    e.preventDefault()
    const result = await Swal.fire({
      title: '¿Seguro?',
      html: '<span style="color: black">Cambiarás tu información</span>',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, cámbialo',
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
    })
    if(result.isConfirmed){
      openModalCharge()
      const respond = await updateUser({...newUser})
      if(respond){
        setNewUser({
          name: respond.name,
          lastName: respond.lastName,
          img: null,
          email: respond.email,
          id: user.id || id
        })
      }
      closeModalCharge()
      Swal.fire({
        title: 'Listo!',
        html: `<span style="color: black">Información Actualizada</span>`,
        icon: 'success'
      })
    }
  }

  return (
    <div className="Profile">
      <div className="Profile__Content">
        <p className="Profile__Title Title-3-bold">Información Personal</p>
        <div className="Profile__Img">
          {setImage()}
        </div>
        <form className="Profile__Form" onSubmit={manageSubmit}>
          <div className="Profile__ImgButton">
            <input type="file" accept="image/png, image/jpeg" id="userImage" onChange={manageImage} files={newUser.img}/>
            <button className="Button-Outline Paragraph"><i className="fas fa-images"></i>Subir Imagen</button>
          </div>
          <div>
            <label htmlFor="user-name" className="Title-4">Nombre *</label>
            <input type="text" id="user-name" className="Input Paragraph" name="name" onChange={manageInput} value={newUser.name} required pattern="[A-Za-z]{2,}"/>
          </div>
          <div>
            <label htmlFor="user-lastName" className="Title-4">Apellido *</label>
            <input type="text" id="user-lastName" className="Input Paragraph" name="lastName" onChange={manageInput} value={newUser.lastName} required pattern="[A-Za-z]{2,}"/>
          </div>
          <div>
            <label htmlFor="user-email" className="Title-4">Email *</label>
            <input type="text" id="user-email" className="Input Paragraph" disabled name="email" onChange={manageInput} value={newUser.email} required pattern=".{3,}"/>
          </div>
          <div className="Profile__Submit">
            <input type="submit" className="Button-Primary Title-3-bold" value="Actualizar Información"/>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Profile