import React from 'react'
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import Features from '../../components/features/Features'
import FeaturedProp from '../../components/featuredprop/FeaturedProp'
import './Home.css';
import PropertyList from '../../components/propertylist/PropertyList';
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className='homeContainer'>
        <Features/>
        <h1 className="homeTitle">Browse By Any Property</h1>
        <PropertyList/>
        <h1 className="homeTitle">Homes guest love</h1>
         <FeaturedProp/>
      </div>
    </div>

  )
}

export default Home