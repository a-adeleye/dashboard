import React from "react";
import { Link, Outlet } from "react-router-dom";
import Login from './components/Login'


function App() {

  const [token, setToken] = React.useState("");
  const [user, setUser] = React.useState("");

  if (!token) {
    return (
      <div className=" w-screen h-screen bg-theme-yellow flex justify-center items-center">
        <Login setToken={setToken} setUser={setUser}/>
      </div>
    );
  }

  console.log(user);
  console.log(token);

  return (
    <div className=" w-screen h-screen bg-theme-yellow flex justify-center items-center">
      <Outlet context={[user,token]}/>
    </div>
  );
}

export default App;
