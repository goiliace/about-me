import React from 'react'
import './title.css'
export const Title = (
    {title,description}
) => {
  return (
    <div className='text-center title_content'>
        <h5>{title}</h5>
        <h2>{description}</h2>
    </div>
  )
}
