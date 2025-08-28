// import { Routes, Route } from 'react-router-dom'
// import { HashRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Layout from './components/Layout'
import Portfolio from './components/Portfolio'
import Dashboard from './components/Dashboard'
import './App.scss'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* 'Portfolio' Page is in development */}
          {process.env.NODE_ENV === 'development' && (
            <Route path="/portfolio" element={<Portfolio />} />
          )}
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
export default App
