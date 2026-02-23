import './About.css'

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm an aspiring Software Engineer and Data Science enthusiast based in Sylhet, Bangladesh. 
              My journey in tech is driven by a deep curiosity and a desire to build meaningful solutions.
            </p>
            <p>
              Currently, I'm involved in AI research at Metropolitan University, where I developed the 
              "Hallucinated AI Detector" – a system that identifies when AI models produce false information. 
              This project reflects my passion for AI ethics and reliability.
            </p>
            <p>
              Beyond coding, I love exploring new technologies, contributing to open source, and continuously 
              learning to stay at the forefront of innovation.
            </p>
            <div className="about-details">
              <div className="detail-item">
                <span className="detail-label">📍 Location:</span>
                <span>Sylhet, Bangladesh</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">🎓 Institute:</span>
                <span>Metropolitan University (AI)</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">📧 Email:</span>
                <span>rejaulkorimsadi@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About