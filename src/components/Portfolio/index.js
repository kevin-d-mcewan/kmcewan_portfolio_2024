import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { getDocs, collection } from 'firebase/firestore'
import { getStorage, ref, getDownloadURL } from 'firebase/storage'
import { db } from '../../firebase'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [portfolio, setPortfolio] = useState([])
  const [imageUrl, setImageUrl] = useState('')

  useEffect(() => {
    let timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2000)
    return () => {
      clearTimeout(timer)
    }
  })
  useEffect(() => {
    getPortfolio()
  }, [])
  const getPortfolio = async () => {
    const querySnapshot = await getDocs(collection(db, 'portfolio'))
    setPortfolio(querySnapshot.docs.map((doc) => doc.data()))
  }

  useEffect(() => {
    const storage = getStorage()
    const imageRef = ref(
      storage,
      'gs://react-portfolio-dashboar-44560.firebasestorage.app/portfolio'
    ) // Path to folder

    // Get the download URL
    getDownloadURL(imageRef)
      .then((url) => {
        setImageUrl(url) // store URL in state
      })
      .catch((error) => {
        console.error('Error fetching image:', error)
      })
  }, [])

  // rendering Portfolio
  const renderPortfolio = (portfolio) => {
    return (
      <div className="images-container">
        {portfolio.map((port, idx) => {
          return (
            <div className="image-box" key={idx}>
              <img
                src={port.image}
                className="portfolio-image"
                alt="portfolio"
              />
              <div className="content">
                <p className="title">{port.name}</p>
                <h4 className="description">{port.description}</h4>
                <button className="btn" onClick={() => window.open(port.url)}>
                  View
                </button>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'Portfolio'.split('')}
            idx={15}
          />
          <h3>Profile Image</h3>
          {imageUrl ? (
            <img
              src={imageUrl}
              alt="Profile"
              style={{ width: 300, borderRadius: '50%' }}
            />
          ) : (
            <p>Uploading...</p>
          )}
        </h1>
        <div>{renderPortfolio(portfolio)}</div>
      </div>
      <Loader type="pacman" />
    </>
  )
}
export default Portfolio
