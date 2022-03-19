import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import LoginPage from "./components/Login";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import EditProfile from "./components/EditProfile";

export default function RouteSwitch() {
  return (
    <BrowserRouter basename="dashboard">
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/edit" element={<EditProfile />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
          <Route
            index
            element={
              <Dashboard />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
