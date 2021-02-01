import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
const StarRating = () => {
  const [rating, setRating] = useState(null)
  const [hover, setHover] = useState(null)

  return (
    <>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1
        return (
          <label key={i}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <FaStar
              className="star"
              size={30}
              color={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(ratingValue)}
            />
          </label>
        )
      })}
    </>
  )
}

export default StarRating
