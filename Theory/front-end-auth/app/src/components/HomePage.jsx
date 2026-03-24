import Header from './Header'
import RegisterForm from './RegisterForm'
import LoginForm from './LoginForm'
import './HomePage.css'
import { registerUser } from '../api/services'

function HomePage() {
  
  const handleRegisterSubmit = (user) => {
    registerUser(user);
  }

  const handleLoginSubmit = (user) => {
    // placeholder for login submit handling
    
  }

  return (
    <div className="page-shell">
      <Header />
      <main className="homepage-main" role="main">
        <div className="intro">
          <h1>Welcome to FrontAuth</h1>
          <p>Simple authentication starting point with a dark theme and component-based layout.</p>
        </div>

        <div className="auth-grid">
          <RegisterForm onSubmit={handleRegisterSubmit} />
          <LoginForm onSubmit={handleLoginSubmit} />
        </div>
      </main>
      <footer className="app-footer">
        <small>Built with clean architecture and React components</small>
      </footer>
    </div>
  )
}

export default HomePage
