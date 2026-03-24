import { useState } from 'react'
import './AuthCard.css'

function RegisterForm({ onSubmit }) {

    const [userobj, setUserobj] = useState({
        name: "",
        email: "",
        password: "",
        role: ""
    });

    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit(userobj);
    }

  return (
    <section className="auth-card" id="register" aria-labelledby="register-title">
      <h2 id="register-title">Register</h2>
      <form onSubmit={handleSubmit}>
        <label className="field-group" htmlFor="name">
          <span>Name</span>
          <input id="name" name="name" type="text" placeholder="Your name" required autoComplete="name" onChange={(e) => setUserobj({...userobj, name: e.target.value})}/>
        </label>

        <label className="field-group" htmlFor="email-register">
          <span>Email</span>
          <input id="email-register" name="email" type="email" placeholder="you@example.com" required autoComplete="email" onChange={(e) => setUserobj({...userobj, email: e.target.value})}/>
        </label>

        <label className="field-group" htmlFor="password-register">
          <span>Password</span>
          <input id="password-register" name="password" type="password" placeholder="Create password" required autoComplete="new-password" onChange={(e) => setUserobj({...userobj, password: e.target.value})}/>
        </label>

        <label className="field-group" htmlFor="role">
          <span>Role</span>
          <select id="role" name="role" required onChange={(e) => setUserobj({...userobj, role: e.target.value})}>
            <option value="">Select role</option>
            <option value="Admin">Admin</option>
            <option value="Emp">Emp</option>
            <option value="Customer">Customer</option>
          </select>
        </label>

        <button type="submit" className="auth-button">Sign Up</button>
      </form>
    </section>
  )
}

export default RegisterForm
