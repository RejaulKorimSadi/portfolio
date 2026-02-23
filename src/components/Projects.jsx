import { useState } from 'react'
import './Projects.css'

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null)

  const projects = [
    {
      title: 'Hallucinated AI Detector',
      description: 'An AI system that detects when other AIs are "lying" or hallucinating. Developed after months of intensive research at Metropolitan University. This project focuses on AI reliability and ethics.',
      tech: ['Python', 'TensorFlow', 'NLP', 'Flask'],
      github: 'https://github.com/RejaulKorimSadi', // Replace with specific repo if available
    
    },
    {
      title: 'Task Manager App',
      description: 'A full-featured task management application built with Flutter and Firebase. Includes user authentication, real-time updates, push notifications, and a clean Material Design UI. Completed as a personal project to deepen my mobile development skills.',
      tech: ['Flutter', 'Dart', 'Firebase', 'Provider', 'Push Notifications'],
      postUrl: 'https://linkedin.com/in/rejaulkorimsadi', // <-- REPLACE WITH YOUR ACTUAL POST LINK
      github: 'https://github.com/RejaulKorimSadi/task-manager' // Replace if repo exists
    }
  ]

  const toggleDetails = (index) => {
    if (!projects[index].postUrl) {
      setActiveProject(activeProject === index ? null : index)
    }
  }

  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className={`project-card card ${activeProject === index ? 'expanded' : ''}`}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>

              {project.postUrl ? (
                <a 
                  href={project.postUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-outline project-btn"
                >
                  View LinkedIn Post →
                </a>
              ) : (
                <button 
                  className="btn btn-outline project-btn"
                  onClick={() => toggleDetails(index)}
                >
                  {activeProject === index ? 'Show Less' : 'Learn More'}
                </button>
              )}

              {!project.postUrl && activeProject === index && (
                <div className="project-details">
                  <p><strong>Research Context:</strong> This project was part of AI research at Metropolitan University, addressing the critical issue of AI hallucination in large language models.</p>
                  <div className="project-links">
                    {project.liveDemo && <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">Live Demo →</a>}
                    {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub →</a>}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <p className="more-projects-note">More projects coming soon! Check my GitHub for updates.</p>
      </div>
    </section>
  )
}

export default Projects