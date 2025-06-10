import React from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import ReminderPage from './pages/ReminderPage';
import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';

const App = () => {
  const location = useLocation();

  // Check if current route is login
  const isLoginPage = location.pathname === "/login";

  return (
    <>
      <div
        style={{ display: "flex", flexDirection: "column", height: "100vh" }}
      >
        {!isLoginPage && <Topbar />}
        <div style={{ display: "flex", flex: 1 }}>
          {!isLoginPage && <Sidebar />}
          <div style={{ flex: 1, padding: "1rem" }}>
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/" element={<DashboardPage />} />
              <Route path="/reminder-ap" element={<ReminderPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
