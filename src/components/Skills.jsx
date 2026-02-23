import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      name: 'Software Engineering',
      skills: ['React', 'Node.js', 'Git', 'Clean Code', 'Agile']
    },
    {
      name: 'Data Science & AI',
      skills: ['Python', 'Machine Learning', 'AI Research', 'Data Analysis', 'Ethical AI']
    },
    {
      name: 'Mobile Development',
      skills: ['Flutter', 'Dart', 'Firebase', 'UI/UX', 'Responsive Design']
    },
    {
      name: 'Core Fundamentals',
      skills: ['DSA', 'Problem Solving', 'Algorithms', 'OOP', 'System Design']
    }
  ]

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="skill-category card">
              <h3>{category.name}</h3>
              <div className="skill-items">
                {category.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills