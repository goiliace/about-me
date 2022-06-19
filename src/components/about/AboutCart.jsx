import React from 'react'
import './about.css'
export const AboutCart = ({icon, content, styleContent}) => {
  return (
    <div className='about_card'>
        <div className='about_card_icon'>{icon}</div>
        <p className={styleContent}>{content}</p>
    </div>
  )
}
