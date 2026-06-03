import React from 'react'
import starImage from "/star.svg"
const Rating = ({value}) => {
    const stars = Array(value).fill(starImage)
  return (
    <>
        {
            stars.map((star, i) => <img key={i} src={starImage}  width="14" height="14" alt="star" />)
        }
        
    </>
  )
}

export default Rating