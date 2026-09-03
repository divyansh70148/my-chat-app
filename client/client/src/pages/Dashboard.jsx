function Dashboard() {
  return (
    <div className="page">
      <h1>Dashboard</h1>

      <div className="cards">
        <div className="card">
          <h3>👥 Online Users</h3>
          <h2>2</h2>
        </div>

        <div className="card">
          <h3>💬 Total Messages</h3>
          <h2>24</h2>
        </div>

        <div className="card">
          <h3>🟢 Status</h3>
          <h2>Online</h2>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;