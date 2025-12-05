// src/comonents/ProjectCard/ProjectCard.jsx

import { React } from 'react'
import './ProjectCard.scss' //We'll create this file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function ProjectCard({ title, description, image, technologies, githubUrl }) {
  return (
    <div className="project-card">
      <img
        src={image}
        alt={`${title} project screenshot`}
        className="project-image"
      />
      <div className="project-info">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <p className="project-technologies">{technologies}</p>
        <div className="project-links">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
            activeclassname="active"
          >
            GitHub
            <FontAwesomeIcon
              icon={faGithub}
              color="pink"
              className="anchor-icon"
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
