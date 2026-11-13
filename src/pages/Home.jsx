import { useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'
import { siteConfig } from '../data/siteConfig'

const skills = [
  { title: 'Frontend', items: ['HTML & CSS', 'JavaScript', 'React', 'Responsive design'] },
  { title: 'Tools', items: ['Git & GitHub', 'VS Code', 'Figma basics', 'Vite'] },
  { title: 'Foundations', items: ['Programming logic', 'Data structures', 'Problem solving', 'Team collaboration'] },
]

const initialForm = { name: '', email: '', subject: '', message: '' }

export default function Home() {
  const [available, setAvailable] = useState(true)
  const [form, setForm] = useState(initialForm)
  const [feedback, setFeedback] = useState({ type: '', text: '' })
  const [draftLink, setDraftLink] = useState('')

  function handleChange(event) {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
    setFeedback({ type: '', text: '' })
    setDraftLink('')
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (!form.name.trim() || !form.email.trim() || !form.subject.trim() || !form.message.trim()) {
      setFeedback({ type: 'error', text: 'Please complete every field before preparing your message.' })
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setFeedback({ type: 'error', text: 'Please enter a valid email address.' })
      return
    }
    if (!siteConfig.email) {
      setFeedback({ type: 'error', text: 'Message delivery is not configured yet. Add your email address to .env.local to enable this form.' })
      return
    }
    const mailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`From: ${form.name} (${form.email})\n\n${form.message}`)}`
    setDraftLink(mailto)
    setFeedback({ type: 'success', text: 'Your draft is ready. Open it in your email app, then press Send to deliver.' })
  }

  return (
    <main>
      <section className="hero-section page-width" id="home">
        <div className="hero-copy">
          <div className="status-pill">
            <span className={`status-dot${available ? '' : ' offline'}`} />
            <button type="button" onClick={() => setAvailable((value) => !value)} aria-pressed={available}>
              {available ? 'Open to opportunities' : 'Currently focused'}
            </button>
          </div>
          <p className="hero-overline">COMPUTER SCIENCE UNDERGRADUATE <span>·</span> ABUAD</p>
          <h1 className="hero-name">Adamolekun<br /><span className="gradient-text">pelumi john</span></h1>
          <h2 className="hero-role">Aspiring software engineer</h2>
          <p className="hero-description">Hello, I&apos;m Adamolekun pelumi john, a Computer Science undergraduate at Afe Babalola University. I enjoy learning how technology works and building thoughtful digital experiences.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">Explore my work <span aria-hidden="true">↓</span></a>
            <a className="button button-quiet" href="#contact">Contact me <span aria-hidden="true">→</span></a>
          </div>
          <div className="hero-meta"><span>Based in Nigeria</span><span className="meta-divider" /><span>Currently learning <b>React &amp; UI</b></span></div>
        </div>
        <a className="scroll-hint" href="#about"><span className="scroll-line" /> Scroll to explore</a>
      </section>

      <section className="about-section page-width content-section" id="about">
        <div className="section-heading">
          <span className="eyebrow">ABOUT ME</span>
          <h2>Curious by nature.<br /><span className="gradient-text">Building with purpose.</span></h2>
          <p>A student, a maker, and a firm believer that the best way to learn is to stay curious.</p>
        </div>
        <div className="about-story glass-panel">
          <div className="story-copy">
            <span className="eyebrow">MY STORY</span>
            <h3>Learning the craft, one idea at a time.</h3>
            <p>I&apos;m Adamolekun pelumi john, a Computer Science undergraduate at Afe Babalola University (ABUAD). My journey into tech is driven by a simple question: how can we use software to make everyday things work a little better?</p>
            <p>At university, I&apos;m building strong foundations in computing while exploring the creative side of the web. I enjoy taking an idea from a rough sketch to a working interface, learning something new at every step.</p>
            <p>My goal is to grow into a thoughtful software engineer who builds useful, accessible products and contributes to teams that care about the details.</p>
          </div>
          <div className="study-card">
            <span className="eyebrow">RIGHT NOW</span>
            <h3>Studying Computer Science</h3>
            <p>Afe Babalola University</p>
            <p>Ado-Ekiti, Nigeria</p>
            <div className="study-rule" />
            <span className="eyebrow">CURRENT FOCUS</span>
            <strong>Frontend development</strong>
            <p>Learning to create clearer, more engaging web experiences.</p>
          </div>
        </div>
        <div className="skills-section">
          <div className="skills-heading"><span className="eyebrow">WHAT I&apos;M LEARNING</span><h3>Skills in progress — always.</h3></div>
          <div className="skills-grid">{skills.map((skill, index) => <article className="skill-group" key={skill.title}><span className="skill-number">0{index + 1}</span><div><h4>{skill.title}</h4><div className="tag-list">{skill.items.map((item) => <span className="tag" key={item}>{item}</span>)}</div></div></article>)}</div>
        </div>
      </section>

      <section className="projects-section content-section" id="projects">
        <div className="page-width">
          <div className="section-heading">
            <span className="eyebrow">SELECTED WORK</span>
            <h2>Ideas made<br /><span className="gradient-text">a little more real.</span></h2>
            <p>A few experiments and learning projects. Each one has taught me something new.</p>
          </div>
          <div className="project-grid">{projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}</div>
          <p className="projects-note">These are learning projects and concepts. Source links will be added when published.</p>
        </div>
      </section>

      <section className="contact-section page-width content-section" id="contact">
        <div className="section-heading">
          <span className="eyebrow">CONTACT</span>
          <h2>Have a good one<br /><span className="gradient-text">in mind?</span></h2>
          <p>Questions, ideas, collaboration — I&apos;d be glad to hear from you.</p>
        </div>
        <div className="contact-layout">
          <aside className="contact-aside glass-panel">
            <span className="eyebrow">LET&apos;S CONNECT</span>
            <h3>Every great thing starts with a conversation.</h3>
            <p>If you&apos;re working on something interesting, have an opportunity to share, or just want to say hi, I&apos;d love to hear from you.</p>
            <div className="contact-detail"><span className="detail-icon">@</span><div><span className="eyebrow">EMAIL</span>{siteConfig.email ? <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> : <span>Coming soon</span>}</div></div>
            <div className="contact-detail"><span className="detail-icon">☎</span><div><span className="eyebrow">PHONE</span>{siteConfig.phone ? <a href={`tel:${siteConfig.phone}`}>{siteConfig.phone}</a> : <span>Coming soon</span>}</div></div>
            <div className="contact-detail"><span className="detail-icon">⌖</span><div><span className="eyebrow">LOCATION</span><span>Ado-Ekiti, Nigeria</span></div></div>
          </aside>
          <form className="contact-form glass-panel" onSubmit={handleSubmit} noValidate>
            <div className="form-heading"><span className="eyebrow">SEND A MESSAGE</span><span className="form-required">* Required fields</span></div>
            <div className="form-row">
              <label>Full name <span>*</span><input name="name" value={form.name} onChange={handleChange} placeholder="Your name" autoComplete="name" required /></label>
              <label>Email address <span>*</span><input type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@example.com" autoComplete="email" required /></label>
            </div>
            <label>Subject <span>*</span><input name="subject" value={form.subject} onChange={handleChange} placeholder="What would you like to talk about?" required /></label>
            <label>Your message <span>*</span><textarea name="message" value={form.message} onChange={handleChange} placeholder="A few details go a long way..." rows="5" required /></label>
            {feedback.text && <div className={`form-feedback ${feedback.type}`} role="status"><p>{feedback.text}</p>{draftLink && <a className="draft-link" href={draftLink}>Open email draft <span aria-hidden="true">↗</span></a>}</div>}
            <button className="button button-primary submit-button" type="submit">Prepare message <span aria-hidden="true">↗</span></button>
            <p className="form-footnote">This form opens your default email app. Your message is not sent until you press Send there.</p>
          </form>
        </div>
      </section>
    </main>
  )
}
