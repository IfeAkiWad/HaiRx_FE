import React from 'react'
import auntjackies from '../../Hairx Product Images/auntjackies.jpeg'
import beleza from '../../Hairx Product Images/beleza.jpg'
import briogeo from '../../Hairx Product Images/briogeo.webp'
import CarolsDaughter from '../../Hairx Product Images/CarolsDaughter.jpeg'
import Curls from '../../Hairx Product Images/Curls.webp'
import DevaCurl from '../../Hairx Product Images/DevaCurl.webp'
import oribe from '../../Hairx Product Images/oribe.webp'
import suave from '../../Hairx Product Images/suave.webp'
import PROSE from '../../Hairx Product Images/PROSE.jpg'

const ImageAnimation = () => {
   const images = [auntjackies, beleza, briogeo, CarolsDaughter, Curls, DevaCurl, oribe, suave, PROSE]
  return (
    <div>
        {images.map((image, index) => {
            return <div className='merri-go-container'><img key={index} src={image} alt={`${index}`}/></div>
        })}
    </div>
  )
}

export default ImageAnimation