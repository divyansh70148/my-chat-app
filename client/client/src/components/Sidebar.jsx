import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h3>Menu</h3>

      <Link to="/">🏠 Dashboard</Link>
      <Link to="/chats">💬 Chats</Link>
      <Link to="/users">👥 Users</Link>
      <Link to="/notifications">🔔 Notifications</Link>
      <Link to="/profile">👤 Profile</Link>
      <Link to="/settings">⚙️ Settings</Link>
    </aside>
  );
}

export default Sidebar;