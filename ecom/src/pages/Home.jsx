import React, { useEffect } from 'react'
import { categories } from '../assets/mockData'
import ProductImage from "../assets/images/product2.jpg"
import InfoSection from '../components/InfoSection'
import CategorySection from '../components/CategorySection'
import { setProducts } from '../redux/productSlice'

import { useSelector, useDispatch } from 'react-redux'
import { mockData } from '../assets/mockData'
import ProductCard from '../components/ProductCard'
import Shop from './Shop'

const Home = () => {

  const dispatch = useDispatch()
  // const products = useSelector(state => state.products)
  const products = useSelector(state => state.product);
  useEffect(()=>{
    dispatch(setProducts(mockData))
  },[])

  return (
    <div>
    <div className='bg-white mt-2 px-4 md:px-16 lg:px-24 '>
    <div className='container mx-auto py-4 flex flex-col md:flex-row space-x-2' >        
      <div className='w-full md:w-3/12'>
        
           <div className='bg-red-500 text-white text-xs fond-bold px-2 py-2.5'>SHOP BY CATEGORIES</div>
           <ul className='space-y-4 bg-grey-200 p-3 list-none' >
            {categories.map((category, index)=>(
              <li key={index} className='flex items-center text-sm fond-medium list-none'>
                <div className='w-2 h-2 bg-red-500 rounded-full mr-2'></div>
                {category}
              </li>
            ))}
           </ul>
           
        </div>


        



        {/* <div className='w-full md:w-9/12 mt-0 md:mt-0 h-96 relative'> */}

        <div className='w-full md:w-9/12 mt-0 md:mt-0 h-[600px] relative'>


          <img src={ProductImage}alt="" className='h-full w-full '/>
          <div className='absolute top-16 left-8'>
            
            <h1 className="text-gray-600 mb-4">WELCOME TO DRILLAX</h1>
            <p className="text-3xl font-bold">POWER TO LIVE</p>
            <p className="text-xl mt-2.5 font-bold text-gray-800">MILLION + PRODUCTS</p>
            <button className="bg-red-600 px-8 py-1.5 text-white mt-4 hover:bg-red-700 
                             transform transition-transform duration-300 hover:scale-105">SHOP NOW</button>
          </div>
        </div>
      </div>
      <InfoSection/>
      <CategorySection/>
      <div className='container mx-auto py-12'>
        <h2 className='text-2xl fond-bold mb-6 text-center'>Top Products</h2>
        <div className='grid grid-cols-1 sm:grid-cole-2 md :grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer'>
          {products.products.slice(0, 5).map((product)=>(
            <ProductCard product={product}/>
          ))}
        </div>
      </div>
      
    </div>

    <Shop/>
    </div>
    
  )
}

export default Home
