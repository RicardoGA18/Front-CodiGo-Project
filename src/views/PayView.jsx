import React,{useEffect , useState} from 'react'
import {useContext} from 'react'

// Context
import AppContext from '../context/App/AppContext'

// Components
import StaticHead from '../components/organisms/StaticHead'
import Head from '../components/organisms/Head'
import SubTitle from '../components/molecules/Subtitle'
import Summary from '../components/molecules/Summary'

// Utils
import {openModalCharge,closeModalCharge} from '../utils/Alerts' 

const PayView = () => {
  // State
  const {categories,user,cart} = useContext(AppContext)
  const [payer,setPayer] = useState({
    dni: '',
    phone: '',
    address: '',
    addressNumber: '',
    zipCode: '',
  })
  
  // Actions
  const {getCategories,getPreference} = useContext(AppContext)
  
  const actualizarInput = e => {
    setPayer({
      ...payer,
      [e.target.name]: e.target.value
    })
  }

  const manejarSubmit = async e => {
    e.preventDefault()
    openModalCharge()
    const preference = {
      user: {
        ...user,
        ...payer,
        addressNumber: +payer.addressNumber,
        phone: +payer.phone
      },
      cart: cart
    }
    const url = await getPreference(preference)
    if(url){
      window.location.href = url
    }else{
      closeModalCharge()
    }
  }


  // InitView
  const initView = async () => {
    openModalCharge()
    await getCategories()
    closeModalCharge()
  }

  useEffect(() => {
    window.scroll(0,0)
    initView()
  },[])
  //End InitView

  return (
    <div className="PayView">
      <StaticHead />
      <Head 
        view='pasarela'
        categories={categories}
        user={user}
        cart={cart}
      />
      <div className="l-container">
        <div className="l-contain PayView__Content">
          <SubTitle 
            name="Pasarela de Pago"
          />
          <form className="PayView__Form" onSubmit={manejarSubmit}>
            <p className="Title-3-bold">Datos Personales</p>
            <div className="PayView__Form-Personal">
              <input type="text" className="Input" placeholder="Documento de Identidad" required pattern="[0-9]{8}" name="dni" value={payer.dni} onChange={actualizarInput}/>
              <input type="text" className="Input" placeholder="Celular" required pattern="[0-9]{9}" name="phone" value={payer.phone} onChange={actualizarInput}/>
            </div>
            <p className="Title-3-bold">Dirección</p>
            <div className="PayView__Form-Card">
              <input type="text" className="Input" placeholder="Calle" required name="address" value={payer.address} onChange={actualizarInput}/>
              <input type="number" className="Input" placeholder="Número de calle" required name="addressNumber" value={payer.addressNumber} onChange={actualizarInput}/>
              <input type="text" className="Input" placeholder="Código postal" required pattern="[0-9]{5}" name="zipCode" value={payer.zipCode} onChange={actualizarInput}/>
            </div>
            <div className="PayView__Form-Submit">
              <input type="submit" value="Realizar el pago" className="Button-Primary Title-3-bold"/>
            </div>
          </form>
          <Summary 
            cart={cart}
            view={'pasarela'}
          />
        </div>
      </div>
    </div>
  )
}

export default PayView