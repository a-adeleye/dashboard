import React from "react";
import { Link } from "react-router-dom";
import { trackPromise } from "react-promise-tracker";
import { Toaster } from "react-hot-toast";
import Avatar from "./Avatar";
import ProfileName from "./ProfileName";
import EditProfile from "./EditProfile";
import EditButton from "./EditButton";
import Loading from "./Loading";
import auth from "../auth/auth";

export default function Profile() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [userData, setUserData] = React.useState();

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    auth.refreshToken();
    setIsOpen(true);
  }

  React.useEffect(() => {
    trackPromise(
      auth.fetchUserData().then((res) => {
        if (!res) {
          const data = JSON.parse(sessionStorage.getItem("sessionData"));
          setUserData(data.me);
          return;
        }
        setUserData(res);
      })
    );
  }, []);

  return (
    <div className=" min-w-3xl max-h-min w-11/12 max-w-4xl overflow-hidden rounded-xl bg-white p-3 shadow sm:rounded-lg sm:p-7">
      <Avatar />
      <div className="m-auto mt-6 text-center">
        <ProfileName name={userData ? userData.name : ""} />
      </div>
      <div className="py-5">
        <h3 className="text-md leading-2 font-medium text-gray-900">
          Profile details
        </h3>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="grid grid-cols-4 items-center gap-4 bg-gray-50 px-2 py-3 sm:px-4">
            <dt className="text-sm font-medium text-gray-500">Name</dt>
            <dd className="col-span-2 mt-1 text-sm text-gray-900">
              {!userData ? <Loading /> : userData.name}
            </dd>
            <dd className="mt-1 flex justify-end text-sm text-gray-500">
              <EditButton id="name" openModal={openModal} />
            </dd>
          </div>
          <div className="grid grid-cols-4 gap-4 items-center bg-white px-2 py-3 sm:px-4">
            <dt className="text-sm font-medium text-gray-500">Email</dt>
            <dd className="col-span-2 mt-1 text-sm text-gray-900">
              {!userData ? <Loading /> : userData.email}
            </dd>
            <dd className="mt-1 flex justify-end text-sm text-gray-500"></dd>
          </div>
          <div className="grid grid-cols-4 gap-4 items-center bg-gray-50 px-2 py-3 sm:px-4">
            <dt className="text-sm font-medium text-gray-500">Phone</dt>
            <dd className="col-span-2 mt-1 text-sm text-gray-900">
              {!userData ? <Loading /> : userData.phone}
            </dd>
            <dd className="mt-1 flex justify-end text-sm text-gray-500"></dd>
          </div>
          <div className="grid grid-cols-4 gap-4 bg-white px-2 py-3 sm:px-4">
            <dt className="text-sm font-medium text-gray-500">Password</dt>
            <dd className="col-span-2 mt-1 text-sm text-gray-900">
              {!userData ? <Loading /> : "**********"}
            </dd>
            <dd className="mt-1 flex justify-end text-sm text-gray-500 sm:mt-0"></dd>
          </div>
        </dl>
      </div>
      <Link to="/dashboard">
        <button
          onClick={auth.refreshToken}
          className="group relative m-auto mt-4 flex w-full max-w-lg justify-center rounded-md border border-transparent bg-yellow-300 py-2 px-4 text-sm font-bold text-black hover:bg-yellow-500 focus:outline-none"
        >
          <span className="absolute inset-y-0 left-0 flex items-center pl-3"></span>
          Back to dashboard
        </button>
      </Link>
      <EditProfile
        isOpen={isOpen}
        openModal={openModal}
        closeModal={closeModal}
      />
      <div>
        <Toaster />
      </div>
    </div>
  );
}
