import React from 'react'
import StaticHead from '../components/organisms/StaticHead'
import Head from '../components/organisms/Head'
import Slider from '../components/organisms/Slider'
import CategoryList from '../components/organisms/CategoryList'

const HomeView = () => {
  return (
    <div className="HomeView">
      <StaticHead></StaticHead>
      <Head view={'home'}></Head>
      <Slider></Slider>
      <div className="HomeView__Content">
        <CategoryList></CategoryList>
      </div>
      <h1>Home</h1>
    </div>
  )
}

export default HomeView