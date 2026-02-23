import './Hero.css'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <h1>
            Hi, I'm <span className="highlight">Md. Rejaul Korim Sadi</span>
          </h1>
          <p className="hero-subtitle">
            Software Engineer & Data Science Enthusiast
          </p>
          <p className="hero-description">
            A curious builder shaping self and world—driven by depth, guided by purpose, 
            and hungry to grow. Focused on Flutter, DSA, and AI research.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">Get in Touch</a>
            <a href="#projects" className="btn btn-outline">View Projects</a>
          </div>
        </div>
        <div className="hero-image">
          <img 
            src="https://i.ibb.co.com/6ct1KNnn/Sadi-s-JPG.jpg" 
            alt="Md. Rejaul Korim Sadi"
            className="profile-image"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero