import React from 'react'
import './About.css'
import Image from '../../media/leandroCv.jpg'

const About = () => {
    return (
        <div className='about-container'>
            <div className='about-desc'>
                <h4>Hi there! 👋</h4>
                <h3>Let me tell you something about me</h3>
                <p>                   
                    I am a creative web developer who loves to code and solve new challenges.<br/>
                    I consider myself a kind, patient and very helpful person, 
                    ready to learn, work and develop the challenges that come my way with dedication and effort.
                </p>
                <br/>
                <h4>Objetives and expectations:</h4>
                <br/>
                <p>
                    My main goal is to formally introduce myself to the IT environment and scale over time as I acquire skills and learning.
                    I expect to start doing my work tasks in a team and collaborative environment.
                </p>
            </div>
            <div className='about-img'>
                <img src={Image} alt='about'/>
            </div>
            
        </div>
    )
}

export default About