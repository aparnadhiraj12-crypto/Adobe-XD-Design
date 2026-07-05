import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Screen from '../components/Screen'

const dots = [
  { top: '2%', left: '18%', size: 18 },
  { top: '5%', left: '82%', size: 22 },
  { top: '11%', left: '35%', size: 16 },
  { top: '15%', left: '45%', size: 18 },
  { top: '20%', left: '48%', size: 20 },
  { top: '26%', left: '52%', size: 18 },
  { top: '30%', left: '59%', size: 20 },
  { top: '34%', left: '66%', size: 16 },
  { top: '38%', left: '72%', size: 14 },
  { top: '30%', left: '12%', size: 16 },
  { top: '42%', left: '50%', size: 18 },
  { top: '50%', left: '54%', size: 16 },
  { top: '48%', left: '65%', size: 18 },
  { top: '52%', left: '15%', size: 16 },
]

export default function Welcome() {
  return (
    <Screen>
      <div className="welcome-graphic" aria-hidden="true">
        {dots.map((d, i) => (
          <span
            key={i}
            className="welcome-dot"
            style={{ top: d.top, left: d.left, width: d.size, height: d.size }}
          />
        ))}
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
