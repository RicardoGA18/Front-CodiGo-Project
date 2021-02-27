// React
import React, {useEffect} from 'react'
import {useContext} from 'react'

// Context
import AppContext from '../context/App/AppContext'

// Components
import StaticHead from '../components/organisms/StaticHead'
import Head from '../components/organisms/Head'
import Slider from '../components/organisms/Slider'
import CategoryList from '../components/organisms/CategoryList'
import Brands from '../components/organisms/Brands'
import Advantage from '../components/organisms/Advantage'
import Footer from '../components/organisms/Footer'


// Temp
//import categories from '../utils/temp/JsonCategories'
import user from '../utils/temp/JsonUser'
import cart from '../utils/temp/JsonCart'
//import sliders from '../utils/temp/JsonSlider'

const HomeView = () => {
  const {getSliders,getCategories,categories,sliders} = useContext(AppContext)

  const initHome = async () => {
    console.log('Cargando...')
    await getSliders()
    await getCategories()
    console.log('Home Cargado')
  }

  useEffect(() => {
    initHome()
  }, [])

  return (
    <div className="HomeView">
      <StaticHead />
      <Head
        view={'home'}
        categories={categories}
        user={user}
        cart={cart}
      />
      <Slider
        sliders={sliders}
      />
      <div className="HomeView__Content">
        <CategoryList
          categories={categories}
        />
        <Brands />
        <Advantage />
      </div>
      <Footer
        categories={categories}
      />
    </div>
  )
}

export default HomeView