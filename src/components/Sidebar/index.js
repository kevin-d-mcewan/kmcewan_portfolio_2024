import './index.scss'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import K_Logo from '../../assets/images/K_Logo.png'
import KMac from '../../assets/images/KMcEwan.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faSkype,
  faYoutubeSquare,
} from '@fortawesome/free-brands-svg-icons'
import {
  faHome,
  faUser,
  faEnvelope,
  faSuitcase,
  faBars,
  faClose,
} from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false)

  return (
    <div className="nav-bar">
      {/* Logo Section */}
      <Link className="logo" to="/" onClick={() => setShowNav(false)}>
        <img className="km-logo" src={K_Logo} alt="kmcewan" />
        <img src={KMac} alt="logo" />
      </Link>
      {/* Nav buttons in NavBar */}
      <nav className={showNav ? 'mobile-show' : ''}>
        {/* Navigation Link to 'Homepage' */}
        <NavLink
          exact="true"
          activeclassname="active"
          to="/"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faHome} color="#0D4843" />
        </NavLink>
        {/* Navigation to the 'about' page */}
        <NavLink
          activeclassname="active"
          className="about-link"
          to="/about"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faUser} color="#0D4843" />
        </NavLink>
        {/* NavLink to 'GitHub' page */}
        <NavLink
          activeclassname="active"
          className={'portfolio-link'}
          to="https://github.com/kevin-d-mcewan/"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faSuitcase} color="#0D4843" />
        </NavLink>
        {/* Navigation Link to 'Contact' Page  */}
        <NavLink
          activeclassname="active"
          className={'contact-link'}
          to="/contact"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faEnvelope} color="#0D4843" />
        </NavLink>
        {/* Close Button */}
        <FontAwesomeIcon
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#eaf4f4"
          size="3x"
          claseName="close-icon"
        />
      </nav>
      {/* Unorderded List Social Media */}
      <ul>
        {/* 'LINKEDIN' icon link */}
        <li>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#0D4843"
              className="anchor-icon"
            />
          </a>
        </li>
        {/* 'GITHUB' icon link */}
        <li>
          <a href="https://www.github.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon
              icon={faGithub}
              color="#0D4843"
              className="anchor-icon"
            />
          </a>
        </li>
        {/* 'YOUTUBE' icon link */}
        <li>
          <a href="www.youtube.com" rel="noreferrer" target="_blank">
            <FontAwesomeIcon
              icon={faYoutubeSquare}
              color="#0D4843"
              className="anchor-icon"
            />
          </a>
        </li>
        {/* 'SKYPE' icon link */}
        <li>
          <a href="skype:live:kevinmcewan" rel="noreferrer" target="_blank">
            <FontAwesomeIcon
              icon={faSkype}
              color="#0D4843"
              className="anchor-icon"
            />
          </a>
        </li>
      </ul>
      <FontAwesomeIcon
        onClick={() => setShowNav(true)}
        icon={faBars}
        color="#eaf4f4"
        size="3x"
        className="hamburger-icon"
        cursor={'pointer'}
      />
    </div>
  )
}

export default Sidebar
