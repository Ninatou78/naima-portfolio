
import './index.css'

const projects = [
  {
    number: '01',
    title: 'Maison Sabi',
    category: 'Web Development',
    description:
      'A restaurant website featuring a digital menu, food imagery and direct WhatsApp ordering.',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    number: '02',
    title: 'Agricultural Data Dashboard',
    category: 'Data Analysis',
    description:
      'A dashboard developed during an internship to help explore agricultural and financial data.',
    tags: ['Data Analysis', 'Dashboard', 'Reporting'],
  },
  {
    number: '03',
    title: 'Intrusion Detection Research',
    category: 'AI & Cybersecurity',
    description:
      'Research on machine-learning techniques for detecting anomalies in Zigbee network traffic.',
    tags: ['Python', 'Machine Learning', 'Research'],
  },
  {
    number: '04',
    title: 'Car Rental Website',
    category: 'Web Development',
    description:
      'A rental website prototype with vehicle information, booking simulation and form validation.',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
]

const skills = [
  'JavaScript',
  'React — currently learning',
  'HTML & CSS',
  'Python',
  'Java',
  'MySQL',
  'Data Analysis',
  'Machine Learning',
]

function App() {
  return (
    <>
      <header className="navbar">
        <a className="logo" href="#home">NM<span>.</span></a>

        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a className="nav-contact" href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="eyebrow">
              SOFTWARE ENGINEERING · WEB DEVELOPMENT
            </p>

            <h1>
              Naima<br />
              <span>Mohamadou.</span>
            </h1>

            <p className="hero-description">
              I build thoughtful digital experiences and explore how
              software, data and AI can solve real-world problems.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore my work <span>↗</span>
              </a>
              <a className="button button-secondary" href="#contact">
                Get in touch
              </a>
            </div>

            <div className="hero-meta">
              <span><i className="status-dot" /> Open to opportunities</span>
              <span>English & French</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="Decorative graphic">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="orbit orbit-three" />

            <div className="visual-card">
              <span className="visual-label">CURRENT FOCUS</span>
              <div className="visual-symbol">&lt;/&gt;</div>
              <h2>Ideas into<br />experiences.</h2>
              <p>Code · Creativity · Curiosity</p>
            </div>

            <span className="floating-tag tag-one">Web</span>
            <span className="floating-tag tag-two">Data</span>
            <span className="floating-tag tag-three">AI</span>
          </div>

          <a className="scroll-cue" href="#about">
            <span /> Scroll to explore
          </a>
        </section>

        <section className="section about-section" id="about">
          <div className="section-heading">
            <p className="eyebrow">A LITTLE ABOUT ME</p>
            <h2>Curious by nature.<br /><span>Builder by choice.</span></h2>
          </div>

          <div className="about-grid">
            <div className="about-copy">
              <p>
                I'm a Software Engineering graduate interested in creating
                useful digital products, understanding data and exploring
                practical applications of artificial intelligence.
              </p>
              <p>
                My international exchange experience taught me to work
                across cultures, communicate with different audiences and
                approach challenges with an open mind.
              </p>
              <p>
                Outside my technical work, I enjoy creative projects and
                turning ideas into websites that real people can use.
              </p>
            </div>

            <aside className="profile-card">
              <p className="eyebrow">QUICK INTRO</p>
              <div className="profile-row">
                <span>Background</span>
                <strong>Software Engineering</strong>
              </div>
              <div className="profile-row">
                <span>Languages</span>
                <strong>French & English</strong>
              </div>
              <div className="profile-row">
                <span>Interests</span>
                <strong>Web, Data & AI</strong>
              </div>
              <div className="profile-row">
                <span>Experience</span>
                <strong>Projects & Internships</strong>
              </div>
            </aside>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="section-heading">
            <p className="eyebrow">WHAT I WORK WITH</p>
            <h2>Skills & <span>interests.</span></h2>
            <p className="section-description">
              A growing toolkit built through coursework, internships and
              hands-on projects.
            </p>
          </div>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-card" key={skill}>
                <span className="skill-number">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span>{skill}</span>
                <span className="skill-arrow">↗</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="section-heading">
            <p className="eyebrow">SELECTED WORK</p>
            <h2>Things I've <span>built.</span></h2>
            <p className="section-description">
              A selection of practical projects, internship work and
              technical research.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-top">
                  <span className="project-number">{project.number}</span>
                  <span className="project-category">{project.category}</span>
                </div>

                <div className="project-art">
                  <span>{project.number}</span>
                  <div className="art-lines">
                    <i />
                    <i />
                    <i />
                  </div>
                  <span className="art-symbol">↗</span>
                </div>

                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <p className="eyebrow">HAVE A PROJECT IN MIND?</p>
          <h2>Let's create something<br /><span>meaningful.</span></h2>
          <p>
            I'm interested in entry-level opportunities, collaborations
            and projects where I can keep learning and contribute.
          </p>
          <a
            className="button button-primary"
            href="mailto:YOUR_EMAIL@example.com"
          >
            Email me <span>↗</span>
          </a>
          <p className="email-note">
            Replace the example email with your professional email address.
          </p>
        </section>
      </main>

      <footer className="footer">
        <a className="logo" href="#home">NM<span>.</span></a>
        <p>Designed & built by Naima Mohamadou.</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </>
  )
}

export default App
