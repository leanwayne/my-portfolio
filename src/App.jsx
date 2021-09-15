import React, {useState, useEffect} from 'react'
import './App.css'
import Cover from './components/cover/Cover'
import NavBar from './components/navBar/NavBar'
import About from './components/abaut/About'

function App() {
    const [scrollHeight, setScrollHeight] = useState(0)

    const handleScroll = () => {
        const position = window.pageYOffset
        setScrollHeight(position)
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
    }, [scrollHeight])

    return (
        <div className="App">
            <NavBar isScrolling={scrollHeight}/>
            <Cover/>
            <About/>
        </div>
    )
}
export default App
