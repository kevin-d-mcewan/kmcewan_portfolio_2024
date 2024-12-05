import LogoTitle_K from '../../assets/images/KM_Logo_2.png'
import LogoTitle_M from '../../assets/images/M_Logo_2.png'
import { Link } from 'react-router-dom'
import './index.scss'

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hi, <br /> I'm
          <img src={LogoTitle_K} alt="developer" />
          evin
          <img src={LogoTitle_M} alt="developerLast" />
          cEwan
          <br />
          software and web developer
        </h1>
        <h2>Frontend Developer / C# Developer / Database Management</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
    </div>
  )
}

export default Home
