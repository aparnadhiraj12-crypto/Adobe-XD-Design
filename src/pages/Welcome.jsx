import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Screen from '../components/Screen'

export default function Welcome() {
  return (
    <Screen>
      <div className="welcome-graphic" aria-hidden="true">
        <span className="welcome-mark">PopX</span>
      </div>

      <div className="welcome-content">
        <h1 className="welcome-title">Welcome to PopX</h1>
        <p className="welcome-subtitle">
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit,
        </p>

        <div className="welcome-actions">
          <Link to="/signup" style={{ display: 'block', marginBottom: 12 }}>
            <Button variant="primary">Create Account</Button>
          </Link>
          <Link to="/login" style={{ display: 'block' }}>
            <Button variant="secondary">Already Registered? Login</Button>
          </Link>
        </div>
      </div>
    </Screen>
  )
}