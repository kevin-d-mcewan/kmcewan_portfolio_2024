//import { Routes, Route } from 'react-router-dom'
//import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Layout from './components/Layout' // './components/Layout'
import PortfolioPage from './components/Portfolio/PortfolioPage'
import Dashboard from './components/Dashboard'
import './App.scss' // The SASS file that sets up looks for every page

function App() {
  return (
    // <HashRouter>   //** <HashRouter> & <BrowserRouter> in 'App.js' only if its not in the 'index.js' file like it is now */
    //   <Routes>
    //     <Route path="/" element={<Layout />}>
    //       <Route index element={<Home />} />
    //       <Route path="/src/components/About" element={<About />} />
    //       <Route path="/contact" element={<Contact />} />
    //       <Route path="/src/components/Portfolio" element={<PortfolioPage />} />
    //     </Route>
    //   </Routes>
    // </HashRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  )
}
export default App
