//src/components/Portfolio/PortfolioPage.jsx

import { React } from 'react'
import Loader from 'react-loaders'
import { projects } from '../../data/projects' // Importing Data
import ProjectCard from '../ProjectCard/ProjectCard' // ProjCard Component *import*

import './PortfolioPage.scss' // Creating Grid Layer *import*
import ImageSlider from '../ImageSlider/ImageSlider'
import '../ImageSlider/ImageSlider.scss'

function PortfolioPage() {
  return (
    <div>
      <ImageSlider />
    </div>
  )
}

export default PortfolioPage
