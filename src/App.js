import React from "react";
import {useNavigate, Outlet } from "react-router-dom";
import auth from "./auth/auth";

function App() {

  const navigate = useNavigate();

  React.useEffect(() => {
   
    if (!auth.isLoggedIn()) {
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
