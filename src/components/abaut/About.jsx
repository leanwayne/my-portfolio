import React from 'react'
import './About.css'
import Image from '../../media/leandro2.jpg'

const About = () => {
    return (
        <div className='about-container'>
            <div className='about-desc'>
                <h3>Let me tell you something abaut me</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veniam autem fugiat expedita iure quibusdam numquam quos ipsa impedit provident aut.
                    Sequi obcaecati quaerat esse nemo consectetur ipsa voluptas blanditiis! Commodi?
                </p>
            </div>
            <div className='about-img'>
                <img src={Image} alt='about'/>
            </div>
            
        </div>
    )
}

export default About