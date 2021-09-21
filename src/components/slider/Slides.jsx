import React from 'react'
import './Slider.css'
import Imageproject1 from '../../media/beatHouseLogo.jpg'
import Imageproject2 from '../../media/dev.jpg'
const slidesInfo = [
    {
        src:Imageproject1,
        alt: 'Beathouse Ecommerce',
        tecnologies: 'Mern stack, Material Ui',
        desc: 'Create your account and select products. Place them in the cart and make a buy order.',
        title: 'Beathouse Ecommerce',
        description: '',
        urlView: 'http://beathouse.herokuapp.com',
        urlCode: 'https://github.com/leanwayne/Beathouse-Ecommerce',
    },
    {
        src: 'https://www.freedieting.com/wp/wp-content/uploads/2018/01/Daily-Calories.jpg',
        alt: 'Calories calculator',
        desc: 'coming soon',
        tecnologies: 'Reactjs, NodeJs, javaScript',
        title: 'Calories calculator',
        description: '',
        urlView: '',
        urlCode: '',
    },
    {
        src: Imageproject2,
        alt: 'This portfolio',
        tecnologies: 'ReactJs, javaScript, css',
        desc: 'a portfolio created for my presentation and to practice my skills in css',
        title: 'This portfolio',
        description: '',
        urlView: '',
        urlCode: 'https://github.com/leanwayne/my-portfolio',
    },
]

const slides = slidesInfo.map((slide) => (
    <div className='slide-container'>
        <img src={slide.src} alt={slide.alt} />
        <div className='slide-desc'>
            <h1>{slide.title}</h1>
            <p>{slide.desc}</p>
            <span>{`Tecnologies: ${slide.tecnologies}`}</span>
            <div className='sns-links'>
                  <a href={slide.urlCode} target='_blank' rel='noreferrer'>
                      <i className='fab fa-github github'></i>
                  </a>
                  <a href={slide.urlView} target='_blank' rel='noreferrer'>
                      <i className='fas fa-desktop desktop'></i>
                  </a>
            </div>
        </div> 
    </div>
))
export default slides