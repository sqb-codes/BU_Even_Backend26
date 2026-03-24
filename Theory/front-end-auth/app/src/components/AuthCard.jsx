import './AuthCard.css'

function AuthCard({ id, title, fields, actionLabel, onSubmit }) {
  return (
    <section className="auth-card" id={id} aria-labelledby={`${id}-title`}>
      <h2 id={`${id}-title`}>{title}</h2>
      <form onSubmit={(e) => e.preventDefault() && onSubmit?.(e)}>
        {fields.map((field) => (
          <label key={field.name} className="field-group">
            <span>{field.label}</span>
            <input
              name={field.name}
              type={field.type}
              placeholder={field.placeholder}
              required={field.required}
              autoComplete={field.autoComplete}
            />
          </label>
        ))}
        <button type="submit" className="auth-button">
          {actionLabel}
        </button>
      </form>
    </section>
  )
}

export default AuthCard
