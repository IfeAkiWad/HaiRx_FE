import React from 'react'
import auntjackies from '../../Hairx Product Images/auntjackies.jpeg'
import briogeo from '../../Hairx Product Images/briogeo.webp'
import CarolsDaughter from '../../Hairx Product Images/CarolsDaughter.jpeg'
import Curls from '../../Hairx Product Images/Curls.webp'
import DevaCurl from '../../Hairx Product Images/DevaCurl.webp'
// import oribe from '../../Hairx Product Images/oribe.webp'
// import suave from '../../Hairx Product Images/suave.webp'

const ImageAnimation = () => {
   const images = [auntjackies, briogeo, CarolsDaughter, DevaCurl, Curls]
//    const images2 = [auntjackies, briogeo, CarolsDaughter, DevaCurl, Curls]
  return (
    <div className='merri-go-container'>
        {images.map((image, index) => {
            return <img className='merri-go-img' key={index} src={image} alt={`${index}`}/>
                   
        })}
        {/* {images2.map((image, index) => {
            return <div className='merri-go-container2'>
                    <img className='merri-go-img2' key={index} src={image} alt={`${index}`}/>
            </div>
                   
        })} */}
        {/* <br /> */}
    </div>
  )
}

export default ImageAnimation