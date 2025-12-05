import { useEffect, useState, CSSProperties } from 'react'
import Loader from 'react-loaders/'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_w984reg', 'template_dys0tyf', form.current, {
        publicKey: 'B3950rG6kEzdZbv3n',
      })
      .then(
        () => {
          console.log('SUCCESS!')
          alert('Message sent successfully!')
          window.location.reload(false)
        },
        (error) => {
          console.log('FAILED...', error.text)
          alert('Something went wrong. Please try again!')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in software and web development opportunities. I
            would like a chance to grow as a developer. Programming isn't just a
            job for me it is something I love doing. I want to continue to grow
            as a developer and help create amazing things. If you have any
            requests or questions for me, please contact me using the form
            below.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>

        <div className="info-map">
          Kevin McEwan,
          <br />
          Vancouver,
          <br />
          Washington
          <br />
          USA
          <br />
          <span>kevin.d.mcewan@gmail.com</span>
        </div>

        <div className="map-wrap">
          <MapContainer center={[45.7155, -122.5017]} zoom={11}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[45.7155, -122.5017]}>
              <Popup>This is my City!</Popup>
            </Marker>
          </MapContainer>
        </div>
        <Loader type="ball-grid-pulse" />
      </div>
    </>
  )
}

export default Contact
