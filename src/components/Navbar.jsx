const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Main navigation">
        <a className="wordmark" href="#home" aria-label="Adamolekun Pelumi John, home">
          <span className="wordmark-mark">P<span>.</span></span>
          <span>Pelumi<span className="wordmark-muted">.dev</span></span>
        </a>
        <div className="nav-links">
          {links.map(({ href, label }) => <a className="nav-link" key={href} href={href}>{label}</a>)}
        </div>
        <a className="nav-cta" href="#contact">Let&apos;s talk <span aria-hidden="true">↘</span></a>
      </nav>
    </header>
  )
}
