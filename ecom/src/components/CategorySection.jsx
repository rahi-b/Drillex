import React from 'react'
import HardwareCategory from '../assets/images/cate3.jpg'
import PowerToolsCategory from '../assets/images/cate2.jpg'
import HandToolsCategory from '../assets/images/cate1.jpg'


const CategorySection = () => {
  const categories = [
    {
      title : "Hardware",
      imageUrl : HardwareCategory,

    },
    
    {
      title : "Power Tools",
      imageUrl : PowerToolsCategory,
    },

    {
      title : "Hand Tools",
      imageUrl : HandToolsCategory,
    },
  ];

  return (
    <div className='container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 cursor-pointer'>

      {categories.map((category, index)=>(
        <div key={index} className='relative h-64 transition-transform duration-300 hover:scale-105'>
          <img src={category.imageUrl} alt='' className='w-full h-full object-cover rounded-lg shadow-md'/>
         <div className='absolute top-70 left-12 '>
          <p className='text-xl font-bold'>{category.title}</p>
          <p className='text-gray-600'>View All</p>
         </div>
        </div>
        
      ))}


      
    </div>
  )
}

export default CategorySection
