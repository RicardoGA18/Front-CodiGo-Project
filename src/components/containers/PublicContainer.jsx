import React from 'react'
import StaticHead from '../organisms/StaticHead'
import Head from '../organisms/Head'
import Slider from '../organisms/Slider'
import Footer from '../organisms/Footer'

const PublicContainer = ({children,view,categories,user,cart,sliders}) => {
  return (
    <>
      <StaticHead />
      <Head 
        view={view}
        categories={categories}
        user={user}
        cart={cart}
      />
      <Slider 
        sliders={sliders}
      />
        {children}
      <Footer 
        categories={categories}
      />
    </>
  )
}

export default PublicContainer