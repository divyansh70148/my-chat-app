import { useState } from "react";

function Settings() {
  const [notifications, setNotifications] = useState(true);
  const [sound, setSound] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [onlineStatus, setOnlineStatus] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);

    if (!darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  };

  return (
    <div className="page settings-page">

      <h1>⚙️ Settings</h1>
      <p className="settings-subtitle">
        Manage your chat preferences
      </p>

      {/* Account */}

      <div className="settings-section">
        <h2>👤 Account</h2>

        <div className="setting-item">
          <div>
            <strong>Profile</strong>
            <p>Manage your personal information</p>
          </div>

          <button
            onClick={() =>
              (window.location.href = "/profile")
            }
          >
            Edit
          </button>
        </div>

        <div className="setting-item">
          <div>
            <strong>Change Password</strong>
            <p>Update your account password</p>
          </div>

          <button
            onClick={() => alert("Password change option")}
          >
            Change
          </button>
        </div>
      </div>

      {/* Notifications */}

      <div className="settings-section">
        <h2>🔔 Notifications</h2>

        <div className="setting-item">
          <div>
            <strong>Push Notifications</strong>
            <p>Receive notifications for new messages</p>
          </div>

          <label className="switch">
            <input
              type="checkbox"
              checked={notifications}
              onChange={() =>
                setNotifications(!notifications)
              }
            />

            <span></span>
          </label>
        </div>

        <div className="setting-item">
          <div>
            <strong>Message Sound</strong>
            <p>Play sound when a new message arrives</p>
          </div>

          <label className="switch">
            <input
              type="checkbox"
              checked={sound}
              onChange={() => setSound(!sound)}
            />

            <span></span>
          </label>
        </div>
      </div>

      {/* Privacy */}

      <div className="settings-section">
        <h2>🔐 Privacy</h2>

        <div className="setting-item">
          <div>
            <strong>Online Status</strong>
            <p>Allow others to see when you are online</p>
          </div>

          <label className="switch">
            <input
              type="checkbox"
              checked={onlineStatus}
              onChange={() =>
                setOnlineStatus(!onlineStatus)
              }
            />

            <span></span>
          </label>
        </div>
      </div>

      {/* Appearance */}

      <div className="settings-section">
        <h2>🎨 Appearance</h2>

        <div className="setting-item">
          <div>
            <strong>Dark Mode</strong>
            <p>Use dark theme for the application</p>
          </div>

          <label className="switch">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={toggleDarkMode}
            />

            <span></span>
          </label>
        </div>
      </div>

      {/* Danger Zone */}

      <div className="settings-section danger-zone">
        <h2>⚠️ Danger Zone</h2>

        <div className="setting-item">
          <div>
            <strong>Logout</strong>
            <p>Sign out from your account</p>
          </div>

          <button
            className="logout-btn"
            onClick={() => alert("Logged out")}
          >
            Logout
          </button>
        </div>
      </div>

    </div>
  );
}

export default Settings;