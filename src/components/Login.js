import React from "react";
import {useNavigate} from "react-router-dom";
import { trackPromise } from "react-promise-tracker";
import FlickLogo from "./FlickLogo";
import LoginForm from "./LoginForm";
import auth from "../auth/auth";
import Loading from "./Loading";

export default function LoginPage() {
  const [formInput, setFormInput] = React.useState("");

  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setFormInput((prev) => (prev = { ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("email", `${formInput.email}`);
    formdata.append("password", `${formInput.password}`);
    trackPromise(
      auth.login(formdata).then((res) => {
        navigate('/dashboard')
      })
    );
  }

  React.useEffect(() => {
    if (auth.isLoggedIn()) {
      navigate("/dashboard");
    }
  });

  return (
    <>
      <div className=" flex max-h-fit w-4/5 min-w-max max-w-lg items-center justify-center rounded-xl bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <FlickLogo />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Log in
          </h2>
          <div className="flex items-center justify-center">
            <Loading />
          </div>

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
