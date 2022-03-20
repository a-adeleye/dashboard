import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import LoginPage from "./components/Login";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import EditProfile from "./components/EditProfile";
import NotFound from "./404";

export default function RouteSwitch() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Dashboard />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="dashboard" element={<Dashboard />}>
           
          </Route>
          <Route path="dashboard/profile" element={<Profile />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
