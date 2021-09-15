import React from 'react'
import './NavBar.css'

const NavBar = ({isScrolling}) => {
    const toTheTop = () => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth' })
    }

    return (
        <div className={`navbar ${isScrolling > 20? 'scrolling' : null}`}>
            <div className='navbar-logo' onClick={toTheTop}>
                Lopez Leandro
            </div>
        </div>
    )
}

export default NavBar
