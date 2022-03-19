import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import LoginPage from "./components/Login";
import HomePage from "./components/Homepage";
import EditProfile from "./components/EditProfile";

export default function RouteSwitch() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="dashboard" element={<HomePage />} />
          <Route path="edit-profile" element={<EditProfile />} />
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
              <HomePage />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
