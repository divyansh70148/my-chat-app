import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import Chats from "./pages/Chats";
import Users from "./pages/Users";
import Profile from "./pages/Profile";
import Notifications from "./pages/Notifications";
import Settings from "./pages/Settings";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div className="main-layout">
        <Sidebar />

        <main className="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/chats" element={<Chats />} />
            <Route path="/users" element={<Users />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;