import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>💬 Socket Chat</h2>

      <div className="nav-links">
        <Link to="/">Dashboard</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/settings">Settings</Link>
      </div>
    </nav>
  );
}

export default Navbar;