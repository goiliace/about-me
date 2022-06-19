import React from 'react'
import './about.css'
import ME from '../../assets/images/about1.jpg'
import { Title } from '../title/Title'
// import { IoIosSchool } from "react-icons/io";
import {RiUser5Fill} from 'react-icons/ri';
import {FaBirthdayCake, FaCalculator} from 'react-icons/fa';
import {AiFillHeart} from 'react-icons/ai';
import { AboutCart } from './AboutCart';
const About = () => {
    const age = new Date().getFullYear() - new Date('2002-04-04').getFullYear()
    return (
        <section id="about" className='about'>
            <Title
                title='Who am i?'
                description='Tất cả thông tin về tui'
            />
            <div className="container">
                <div className="row about_wrapper justify-content-center align-items-center">
                    <div className="col-md-6">
                        <div className="about-me">
                            <div className="about_img">
                                <img src={ME} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="about_content">
                            <div className="about_cards">
                                <div className="about_card_name">
                                    <p className=" display-4">Cao Nguyễn Gia Hưng</p>
                                </div>
                                <AboutCart
                                    icon={<RiUser5Fill/>}
                                    content  = {"Student"}
                                    styleContent = {'font-italic'}
                                />
                                <AboutCart
                                    icon={<FaCalculator/>}
                                    content  = {"Industrial University of Ho Chi Minh City"}
                                />
                                <AboutCart
                                    icon={<FaBirthdayCake/>}
                                    content  = {`${age} years old`}
                                />
                                <AboutCart
                                    icon={<AiFillHeart/>}
                                    content  = {"I love coding and you :))"}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About