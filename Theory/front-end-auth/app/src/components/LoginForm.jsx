import './AuthCard.css'

function LoginForm({ onSubmit }) {
  return (
    <section className="auth-card" id="login" aria-labelledby="login-title">
      <h2 id="login-title">Login</h2>
      <form onSubmit={(e) => {
        e.preventDefault()
        onSubmit?.(e)
      }}>
        <label className="field-group" htmlFor="email-login">
          <span>Email</span>
          <input id="email-login" name="email" type="email" placeholder="you@example.com" required autoComplete="username" />
        </label>

        <label className="field-group" htmlFor="password-login">
          <span>Password</span>
          <input id="password-login" name="password" type="password" placeholder="Enter password" required autoComplete="current-password" />
        </label>

        <button type="submit" className="auth-button">Sign In</button>
      </form>
    </section>
  )
}

export default LoginForm
