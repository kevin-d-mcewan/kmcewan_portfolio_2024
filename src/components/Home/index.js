import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle_K from '../../assets/images/KM_Logo_2.png'
import LogoTitle_M from '../../assets/images/M_Logo_2.png'
import Logo from './Logo'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  // These arrays are the arrays for the words to animate
  const fnameArray = ['e', 'v', 'i', 'n']
  const lnameArray = ['c', 'E', 'w', 'a', 'n']
  const jobArray = [
    's',
    'o',
    'f',
    't',
    'w',
    'a',
    'r',
    'e',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    let timeout = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2000)

    return () => {
      clearTimeout(timeout)
    }
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img src={LogoTitle_K} alt="Software Developer fName" />
            {/* 'evin' animated letters component */}
            <AnimatedLetters
              letterClass={letterClass}
              strArray={fnameArray}
              id={15}
            />
            <img src={LogoTitle_M} alt="Software Develop Last Name" />
            {/* 'cEwan' animated letters component */}
            <AnimatedLetters
              letterClass={letterClass}
              strArray={lnameArray}
              id={20}
            />
            <br />
            {/* 'software developer' animated letters component */}
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              id={27}
            />
          </h1>
          <h2>Frontend Developer / C# Developer / Database Management</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home
