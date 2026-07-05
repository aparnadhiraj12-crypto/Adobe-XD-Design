import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Screen from '../components/Screen'

const DEFAULT_USER = {
  name: 'Marry Doe',
  email: 'Marry@Gmail.Com',
}

export default function AccountSettings() {
  const navigate = useNavigate()
  const [user, setUser] = useState(DEFAULT_USER)
  const [avatar, setAvatar] = useState(null)

  useEffect(() => {
    const stored = localStorage.getItem('popx_user')
    if (stored) {
      try {
        const parsed = JSON.parse(stored)
        setUser({
          name: parsed.name || DEFAULT_USER.name,
          email: parsed.email || DEFAULT_USER.email,
        })
      } catch {
        // ignore parse errors, keep defaults
      }
    }
  }, [])

  const handleAvatarChange = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      setAvatar(URL.createObjectURL(file))
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('popx_user')
    localStorage.removeItem('popx_user_email')
    navigate('/')
  }

  return (
    <Screen>
      <div className="settings-header">
        <h1 className="settings-title">Account Settings</h1>
      </div>

      <div className="settings-profile">
        <div className="avatar-wrap">
          {avatar ? (
            <img src={avatar} alt="Profile" className="avatar-img" />
          ) : (
            <div className="avatar-placeholder">
              {user.name.charAt(0).toUpperCase()}
            </div>
          )}
          <label className="avatar-upload-btn" htmlFor="avatar-input">
            📷
          </label>
          <input
            id="avatar-input"
            type="file"
            accept="image/*"
            onChange={handleAvatarChange}
            style={{ display: 'none' }}
          />
        </div>
        <div>
          <p className="profile-name">{user.name}</p>
          <p className="profile-email">{user.email}</p>
        </div>
      </div>

      <p className="settings-bio">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
        Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
        Erat, Sed Diam
      </p>

      <div className="settings-divider" />

      <div className="settings-footer">
        <button className="logout-link" onClick={handleLogout}>
          Log out
        </button>
      </div>
    </Screen>
  )
}
