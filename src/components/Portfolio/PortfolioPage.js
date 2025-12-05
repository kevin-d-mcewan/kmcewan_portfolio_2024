//src/components/Portfolio/PortfolioPage.jsx

import { React } from 'react'
import Loader from 'react-loaders'
import { projects } from '../../data/projects' // Importing Data
import ProjectCard from '../ProjectCard/ProjectCard'
import './PortfolioPage.scss' // Creating Grid Layer

function PortfolioPage() {
  return (
    <div>
      <section className="portfolio-section">
        <h2>My Projects</h2>
        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              githubUrl={project.githubUrl}
            />
          ))}
        </div>
      </section>
      <Loader type="ball-pulse-rise" />
    </div>
  )
}

export default PortfolioPage
