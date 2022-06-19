import React from 'react'
import './header.css'
import Me from '../../assets/images/avt.jpg'
import { HeaderSocials } from './HeaderSocials'
export const Header = () => {
    return (
        <header>
            <div className="container header d-flex align-items-center flex-column">
                <div className="avt">
                    <img src={Me} alt="avt" className='rounded-circle'/>
                </div>
                <h4 className='display-6'>Hello</h4>
                <h4 className='display-4'>I'm zHung</h4>
                <h6>Tôi làm web này vì rãnh</h6>
                <div className="HeaderSocials">
                    <HeaderSocials />
                </div>
            </div>
        </header>
    )
}
