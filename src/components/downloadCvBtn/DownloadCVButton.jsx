import React from 'react'
import './DownloadCVButton.css'
import leandroCV from '../../media/leandroCV.pdf'

const DownloadCVButton = () => {
    return (   
        <a href={leandroCV} target='_blank' rel='noreferrer'>
            <button className='btn'>
                <i className='fa fa-download'></i>Download CV
            </button>
        </a> 
    )
}

export default DownloadCVButton