import React from 'react'
import StaticHead from '../components/organisms/StaticHead'
import Head from '../components/organisms/Head'

const HomeView = () => {
  return (
    <div className="HomeView">
      <StaticHead></StaticHead>
      <Head></Head>
      <h1>Home</h1>
    </div>
  )
}

export default HomeView