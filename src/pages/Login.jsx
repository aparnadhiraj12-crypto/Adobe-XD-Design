import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Field from '../components/Field'
import Button from '../components/Button'
import Screen from '../components/Screen'

export default function Login() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState({})

  const update = (key) => (e) => setForm({ ...form, [key]: e.target.value })

  const isValid = form.email.trim() !== '' && form.password.trim() !== ''

  const handleSubmit = (e) => {
    e.preventDefault()
    const nextErrors = {}
    if (!form.email.trim()) nextErrors.email = 'Email is required'
    if (!form.password.trim()) nextErrors.password = 'Password is required'
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length === 0) {
      localStorage.setItem('popx_user_email', form.email)
      navigate('/account')
    }
  }

  return (
    <Screen>
      <h1 className="page-title">
        Signin to your
        <br />
        PopX account
      </h1>
      <p className="page-subtitle">
        Lorem ipsum dolor sit amet,
        <br />
        consectetur adipiscing elit,
      </p>

      <form onSubmit={handleSubmit} className="form">
        <Field
          label="Email Address"
          type="email"
          placeholder="Enter email address"
          value={form.email}
          onChange={update('email')}
          error={errors.email}
        />
        <Field
          label="Password"
          type="password"
          placeholder="Enter password"
          value={form.password}
          onChange={update('password')}
          error={errors.password}
        />

        <div style={{ marginTop: 8 }}>
          <Button type="submit" variant="primary" disabled={!isValid}>
            Login
          </Button>
        </div>
      </form>

      <p className="switch-link">
        Don&apos;t have an account? <Link to="/signup">Create one</Link>
      </p>
    </Screen>
  )
}
