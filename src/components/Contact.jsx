import './Contact.css'

const Contact = () => {
  const socialLinks = [
    { name: 'Twitter', icon: '𝕏', url: 'https://twitter.com/RejaulKorimSadi' },
    { name: 'LinkedIn', icon: '🔗', url: 'https://linkedin.com/in/rejaulkorimsadi' },
    { name: 'Facebook', icon: '📘', url: 'https://facebook.com/rejaulkorimsadi' },
    { name: 'Instagram', icon: '📷', url: 'https://instagram.com/rejaulkorimsadi' },
    { name: 'GitHub', icon: '🐙', url: 'https://github.com/RejaulKorimSadi' }
  ]

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <p className="contact-message">
              I'm always open to discussing new projects, creative ideas, or opportunities to collaborate.
            </p>
            <div className="social-links">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={link.name}
                >
                  <span className="social-icon">{link.icon}</span>
                  <span className="social-name">{link.name}</span>
                </a>
              ))}
            </div>
          </div>
         
        </div>
      </div>
    </section>
  )
}

export default Contact