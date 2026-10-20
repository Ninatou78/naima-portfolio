import './App.css'

// ---- Edit your content here ----
const profile = {
  name: 'Naima Mohamadou',
  role: 'Software Engineer',
  email: 'naimamohamadou8@gmail.com',
  location: 'Istanbul, Türkiye',
  languages: 'English, French, Turkish',
  education: 'Haliç University, B.Sc. Software Engineering (2026)',
  linkedin: 'https://www.linkedin.com/in/naima-mohamadou',
  github: 'https://github.com/Ninatou78',
  photo: '/images/profile.jpg.jpeg',
  cv: '/Naima-Mohamadou-CV.pdf',
}

const techs = ['React', 'JavaScript', 'Python', 'Git']

const facts = [
  'Software Engineering graduate, 2026',
  'IEEE conference presenter',
  'Co-founder of Rootsy',
  'Open to remote and freelance work',
]

const services = [
  {
    icon: '</>',
    title: 'Web Development',
    text: 'Responsive websites and web apps built with React and modern tools.',
  },
  {
    icon: 'EN|FR',
    title: 'Bilingual Websites',
    text: 'English and French sites with clear structure and easy navigation.',
  },
  {
    icon: '▦',
    title: 'Data Analysis',
    text: 'Dashboards and reports that turn raw data into clear decisions.',
  },
  {
    icon: 'AI',
    title: 'AI & Research',
    text: 'Machine learning and anomaly detection, backed by published research.',
  },
]

const projects = [
  {
    title: 'Maison Sabi',
    // Replace the tools below with exactly what you built it with
    tech: 'Responsive Web / WhatsApp Ordering / Personal Project',
    text: 'Concept website for a restaurant and catering business, built to practise responsive design: menu categories and pricing, pickup and delivery information, and direct WhatsApp ordering.',
    image: '/images/maison-sabi.png',
    // Paste your live site address between the quotes, e.g. 'https://your-site.com'
    link: 'https://maison-sabi.vercel.app/',
  },
  
  {
    title: 'Zigbee Intrusion Detection',
    tech: 'Python / Machine Learning / IEEE',
    text: 'Research presented at an IEEE conference on detecting intrusions in smart home networks.',
    image: '/images/intrusion-research.png.jpeg',
    link: 'https://doi.org/10.1109/CSNT69054.2026.11502291',
  },

  {
    title: 'Rootsy',
    tech: 'React / AI / Marketplace',
    text: 'AI-powered cultural marketplace connecting expats in Istanbul with products, food, events and housing.',
    image: '/images/rootsy.png.jpeg',
    link: '',
  } ,
]

function App() {
  return (
    <>
      {/* NAVBAR */}
      <header className="navbar">
        <div className="logo">
          Naima <span>Mohamadou</span>
          <small>SOFTWARE ENGINEER</small>
        </div>
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <a href="#contact" className="btn btn-primary">Hire Me</a>
      </header>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-text">
          <p className="hello">Hello, I'm</p>
          <h1>{profile.name}</h1>
          <h2>{profile.role}</h2>
          <p className="hero-sub">
            I build web apps and data-driven tools with React and Python,
            with a focus on accessible, bilingual experiences.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View My Work →</a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
          </div>
          <p className="built-with">Built with</p>
          <div className="tech-row">
            {techs.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section about">
        <div className="about-text">
          <p className="eyebrow">ABOUT ME</p>
          <h3>Building Solutions That Make an Impact</h3>
          <p className="muted">
            I'm a software engineer who turns ideas into working products. I've
  presented machine learning research at an IEEE conference, built a
  profitability dashboard as a data analysis intern, and co-founded
  Rootsy, an AI-powered marketplace for expats. I work in English,
  French and little Turkish, and I care about clean code and accessible design.
          </p>
          <ul className="facts">
            {facts.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
          <a href={profile.cv} download className="btn btn-primary">Download CV ↓</a>
        </div>

        <div className="info-card">
          <div><span>Location</span><p>{profile.location}</p></div>
          <div><span>Email</span><p>{profile.email}</p></div>
          <div><span>Languages</span><p>{profile.languages}</p></div>
          <div><span>Education</span><p>{profile.education}</p></div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section center">
        <p className="eyebrow">MY SERVICES</p>
        <h3>What I Can Do For You</h3>
        <div className="underline" />
        <div className="grid four">
          {services.map((s) => (
            <div className="card service" key={s.title}>
              <div className="icon">{s.icon}</div>
              <h4>{s.title}</h4>
              <p className="muted">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <p className="eyebrow">FEATURED PROJECTS</p>
        <div className="grid three">
          {projects.map((p) => (
            <div className="card project" key={p.title}>
              {p.image ? (
                <img src={p.image} alt={p.title} />
              ) : (
                <div className="placeholder">{p.title[0]}</div>
              )}
              <div className="project-body">
                <h4>{p.title}</h4>
                <p className="tech">{p.tech}</p>
                <p className="muted">{p.text}</p>
                {p.link && (
                  <a href={p.link} target="_blank" rel="noreferrer">View project →</a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="cta">
        <h3>Let's Work Together</h3>
        <p>
          Have a project in mind or a role to discuss? I'd love to hear from you.
        </p>
        <a href={`mailto:${profile.email}`} className="btn btn-primary">Get In Touch →</a>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="logo">
          Naima <span>Mohamadou</span>
          <small>SOFTWARE ENGINEER</small>
        </div>
        <p className="muted">© 2026 {profile.name}. All rights reserved.</p>
        <div className="socials">
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={`mailto:${profile.email}`}>Email</a>
        </div>
      </footer>
    </>
  )
}

export default App