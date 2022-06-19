import React from 'react'
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io5";
import { IoLogoTwitter } from "react-icons/io5";
export const HeaderSocials = () => {
  return (
    <div className="header_social">
        <a href='https://www.facebook.com/suziike/' target='_blank' rel='noopener noreferrer' className='link'><IoLogoFacebook/></a>
        <a href='https://github.com/GoiliAce' target='_blank' rel='noopener noreferrer' className='link'><IoLogoGithub/></a>
        <a href='#' target='_blank' rel='noopener noreferrer'><IoLogoTwitter/></a>
    </div>
  )
}
