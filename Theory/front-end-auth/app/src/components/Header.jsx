import './Header.css'

function Header() {
  return (
    <header className="app-header">
      <div className="brand">
        <div className="logo-shell" aria-hidden="true">
          <span className="logo-dot" />
          <span className="logo-dot" />
          <span className="logo-dot" />
        </div>
        <span className="brand-text">FrontAuth</span>
      </div>
      <nav className="site-nav" aria-label="Primary">
        <a href="#register">Register</a>
        <a href="#login">Login</a>
        <a href="#about">About</a>
      </nav>
    </header>
  )
}

export default Header
