import React from 'react'
import BannerGrid from '../Commponents/HomePage/BannerGrid'
import ProductCarousel from '../Commponents/HomePage/ProductCarousel'
import Values from '../Commponents/HomePage/Values'
import Banner from '../Commponents/HomePage/Banner'
import BlogSection from '../Commponents/HomePage/BlogSection'
import Newsletter from '../Commponents/HomePage/Newsletter'
import SliderSection from '../Commponents/SliderSection'

const HomePage = () => {
  return (
    <div>
      <SliderSection/>
      <BannerGrid/>
      <ProductCarousel/>
      <Values/>
      <Banner/>
      <BlogSection/>
      <Newsletter/>
    </div>
  )
}

export default HomePage