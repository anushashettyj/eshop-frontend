import React from 'react'
import Slider from '../components/Slider';
import Categories from '../components/Categories';
import Products from '../components/Products';
import NewsLetter from '../components/NewsLetter';
const Home = () => {
  return (
    <div>
      <Slider />
      <Categories />
      <Products cat='featured'/>
      <NewsLetter />
    </div>
  )
}

export default Home
