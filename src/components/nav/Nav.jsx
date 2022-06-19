import React from 'react'
import './nav.css'
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBookAlt } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { IoMdContact } from "react-icons/io";
import { useState } from 'react';
export const Nav = () => {
    const [active, setActive] = useState('#');
    return (
        <nav>
            <a href="#" onClick={() => setActive('#')} className = {active === '#' ? 'active':''}><AiOutlineHome/></a>
            <a href="#about" onClick={() => setActive('#about')} className = {active === '#about' ? 'active':''} ><AiOutlineUser/></a>
            <a href="#experience" onClick={() => setActive('#experience')} className = {active === '#experience' ? 'active':''}><BiBookAlt/></a>
            <a href="#services" onClick={() => setActive('#services')} className = {active === '#services' ? 'active':''}><RiServiceLine/></a>
            <a href="#contact" onClick={() => setActive('#contact')} className = {active === '#contact' ? 'active':''}><IoMdContact/></a>
        </nav>
    )
}
