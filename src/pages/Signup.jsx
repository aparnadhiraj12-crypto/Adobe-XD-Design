import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Field from '../components/Field'
import Button from '../components/Button'
import Screen from '../components/Screen'

const initialForm = {
  fullName: '',
  phone: '',
  email: '',
  password: '',
  company: '',
  isAgency: 'yes',
}

export default function Signup() {
  const navigate = useNavigate()
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})

  const update = (key) => (e) => setForm({ ...form, [key]: e.target.value })

  const requiredFilled =
    form.fullName.trim() && form.phone.trim() && form.email.trim() && form.password.trim()

  const handleSubmit = (e) => {
    e.preventDefault()
    const nextErrors = {}
    if (!form.fullName.trim()) nextErrors.fullName = 'Full name is required'
    if (!form.phone.trim()) nextErrors.phone = 'Phone number is required'
    if (!form.email.trim()) nextErrors.email = 'Email address is required'
    if (!form.password.trim()) nextErrors.password = 'Password is required'
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length === 0) {
      localStorage.setItem(
        'popx_user',
        JSON.stringify({ name: form.fullName, email: form.email })
      )
      navigate('/account')
    }
  }

  return (
    <Screen>
      <h1 className="page-title">
        Create your
        <br />
        PopX account
      </h1>

      <form onSubmit={handleSubmit} className="form form-grow">
        <Field
          label="Full Name"
          required
          placeholder="Marry Doe"
          value={form.fullName}
          onChange={update('fullName')}
          error={errors.fullName}
        />
        <Field
          label="Phone number"
          required
          placeholder="Marry Doe"
          value={form.phone}
          onChange={update('phone')}
          error={errors.phone}
        />
        <Field
          label="Email address"
          required
          type="email"
          placeholder="Marry Doe"
          value={form.email}
          onChange={update('email')}
          error={errors.email}
        />
        <Field
          label="Password"
          required
          type="password"
          placeholder="Marry Doe"
          value={form.password}
          onChange={update('password')}
          error={errors.password}
        />
        <Field
          label="Company name"
          placeholder="Marry Doe"
          value={form.company}
          onChange={update('company')}
        />

        <div className="agency-row">
          <span className="agency-label">
            Are you an Agency?<span className="field-required">*</span>
          </span>
          <label className="radio-option">
            <input
              type="radio"
              name="isAgency"
              value="yes"
              checked={form.isAgency === 'yes'}
              onChange={update('isAgency')}
            />
            Yes
          </label>
          <label className="radio-option">
            <input
              type="radio"
              name="isAgency"
              value="no"
              checked={form.isAgency === 'no'}
              onChange={update('isAgency')}
            />
            No
          </label>
        </div>

        <div className="form-footer">
          <Button type="submit" variant="primary" disabled={!requiredFilled}>
            Create Account
          </Button>
          <p className="switch-link">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </form>
    </Screen>
  )
}
