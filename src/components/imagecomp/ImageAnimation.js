import React from 'react'
// import auntjackies from '../../Hairx Product Images/auntjackies.jpeg'
import briogeo from '../../Hairx Product Images/briogeo.webp'
import CarolsDaughter from '../../Hairx Product Images/CarolsDaughter.jpeg'
import Curls from '../../Hairx Product Images/Curls.webp'
// import DevaCurl from '../../Hairx Product Images/DevaCurl.webp'

const ImageAnimation = () => {
   const images = [CarolsDaughter, briogeo, Curls]
//    const images2 = [auntjackies, briogeo, CarolsDaughter, DevaCurl, Curls]
  return (
    <div className='merri-go-container'>
        {images.map((image, index) => {
            return <img className='merri-go-img' key={index} src={image} alt={`${index}`}/>
                   
        })}
    </div>
  )
}

export default ImageAnimation