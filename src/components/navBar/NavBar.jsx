import React from 'react'
import './NavBar.css'
import DownloadCVButton from '../downloadCvBtn/DownloadCVButton'

const NavBar = ({isScrolling}) => {
    const toTheTop = () => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    }

    return (
        <div className={`navbar ${isScrolling > 20 ? 'scrolling' : null}`}>
            <div className='navbar-container' onClick={toTheTop}>
                <spam>Lopez Leandro</spam>
                <DownloadCVButton/>
            </div>
        </div>
    )
}
export default NavBar