import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-info'>
                <h1>Lopez Leandro</h1>
                <p>Based in Buenos Aires, Lanús</p>
            </div>
            <div className='footer-contact'>
                <h3>Contact me !</h3>
                <p>Email: lean_rap50@hotmail.com</p>
                <p>Phone: +54 9 11 59296673</p>
            </div>
            <div className='footer-sns'>
                <div className='design-by'>Design By Lopez Leandro 2021</div>
                <div className='sns-links'>
                    <a href='https://www.linkedin.com/in/leandro-lopez-catalini-9628b21a2/' target='_blank' rel='noreferrer'>
                        <i className='fab fa-linkedin linkedin'></i>
                    </a>
                    <a href='https://github.com/leanwayne' target='_blank' rel='noreferrer'>
                        <i className='fab fa-github github'></i>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer