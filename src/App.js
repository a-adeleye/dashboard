import React from "react";
import {useNavigate, Outlet } from "react-router-dom";
import { isLoggedIn } from "./auth/Login";
import userData from "./auth/UserData";
import refreshToken from "./auth/Refresh";

function App() {

  const navigate = useNavigate();

  React.useEffect(() => {
   
    if (!isLoggedIn()) {
      navigate("/login");
    }
  },[]);

  return (
    <div className=" w-screen h-screen bg-theme-yellow flex justify-center items-center">
      <Outlet />
    </div>
  );
}

export default App;
