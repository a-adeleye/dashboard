import React from "react";
import { Link, Outlet } from "react-router-dom";

function App() {
  const [login, setLogin] = React.useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLogin((prev) => (prev = !prev));
  };

  return (
    <div className=" w-screen h-screen bg-theme-yellow flex justify-center items-center">
      <Outlet />
    </div>
  );
}

export default App;
