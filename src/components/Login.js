import React from "react";
import { Link } from "react-router-dom";
import FlickLogo from "./FlickLogo";
import LoginForm from "./LoginForm";
import { loginUser } from "./Functions";

export default function LoginPage({setToken, setUser}) {
  const [formInput, setFormInput] = React.useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setFormInput((prev) => (prev = { ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("email", `${formInput.email}`);
    formdata.append("password", `${formInput.password}`);
    loginUser(formdata).then(res => {
      setToken(res.data.access_token);
      setUser(res.data.me);
    }
      )
  }

  return (
    <>
      <div className=" flex max-h-fit w-2/5 min-w-fit items-center justify-center rounded-xl bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <FlickLogo />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Log in
          </h2>
          <LoginForm
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            formdata={formInput}
          ></LoginForm>
        </div>
      </div>
    </>
  );
}
