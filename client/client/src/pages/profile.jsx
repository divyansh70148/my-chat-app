import { useState } from "react";

function Profile() {
  const [name, setName] = useState("Divyansh");
  const [email, setEmail] = useState("divyansh@example.com");
  const [bio, setBio] = useState("MERN Stack Developer");
  const [editing, setEditing] = useState(false);

  const saveProfile = () => {
    setEditing(false);
    alert("Profile updated successfully!");
  };

  return (
    <div className="page profile-page">
      <div className="profile-cover"></div>

      <div className="profile-content">

        <div className="profile-avatar">
          {name.charAt(0).toUpperCase()}
        </div>

        <div className="profile-title">
          <div>
            <h1>{name}</h1>
            <p>🟢 Online</p>
          </div>

          {!editing && (
            <button
              className="edit-btn"
              onClick={() => setEditing(true)}
            >
              ✏️ Edit Profile
            </button>
          )}
        </div>

        <div className="profile-form">

          <div className="form-group">
            <label>Full Name</label>

            <input
              type="text"
              value={name}
              disabled={!editing}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Email</label>

            <input
              type="email"
              value={email}
              disabled={!editing}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Bio</label>

            <textarea
              value={bio}
              disabled={!editing}
              onChange={(e) => setBio(e.target.value)}
            />
          </div>

          {editing && (
            <div className="profile-actions">
              <button
                className="save-btn"
                onClick={saveProfile}
              >
                💾 Save Changes
              </button>

              <button
                className="cancel-btn"
                onClick={() => setEditing(false)}
              >
                Cancel
              </button>
            </div>
          )}

        </div>

        <div className="profile-info">

          <div>
            <span>💬</span>
            <strong>Messages</strong>
            <p>24</p>
          </div>

          <div>
            <span>👥</span>
            <strong>Friends</strong>
            <p>12</p>
          </div>

          <div>
            <span>🟢</span>
            <strong>Status</strong>
            <p>Active</p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Profile;