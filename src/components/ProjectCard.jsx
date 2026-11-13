export default function ProjectCard({ project, index }) {
  return (
    <article className={`project-card project-card-${index + 1}`}>
      <div className="project-art" aria-hidden="true">
        <div className="project-art-orbit" />
        <div className="project-art-window">
          <div className="window-dots"><i /><i /><i /></div>
          <div className="art-lines"><span /><span /><span /><span /></div>
          <div className="art-widget"><span>{project.artLabel}</span><strong>{project.artValue}</strong></div>
        </div>
        <span className="art-index">0{index + 1}</span>
      </div>
      <div className="project-copy">
        <div className="project-title-row"><h2>{project.title}</h2>{project.link ? <a href={project.link} aria-label={`View ${project.title}`} target="_blank" rel="noreferrer">↗</a> : <span className="project-link-pending" aria-label="Project link not added">↗</span>}</div>
        <p>{project.description}</p>
        <div className="tag-list">{project.stack.map((item) => <span className="tag" key={item}>{item}</span>)}</div>
      </div>
    </article>
  )
}
