import React from 'react'
import './Cover.css'
import Video1 from '../../media/video5.mp4'

const Cover = () => {
    return (
        <div className='cover-container'>
            <video className='video' src={Video1} autoPlay loop muted/>
            <h1>Lopez Leandro</h1>
            <p>software developer | FrontEnd | BackEnd</p>
        </div>
    )
}
export default Cover