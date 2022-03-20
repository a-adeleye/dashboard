import Avatar from "./Avatar";
import ProfileName from "./ProfileName";
import EditProfile from "./EditProfile";
import React from "react";
import { Link } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

export default function Profile() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [edit, setEdit] = React.useState();

  function closeModal(e) {
    setIsOpen(false); 
    toast.success("Updated")
  }


  function openModal(e) {
    const id = e.target.closest('svg').id;
    setEdit((prev) => (prev = id));
    setIsOpen(true);
  }

  return (
    <div className=" w-11/12 max-w-sm min-w-3xl p-7 bg-white rounded-xl shadow overflow-hidden sm:rounded-lg">
      <Avatar />
      <div className="mt-6 text-center m-auto">
        <ProfileName />
      </div>
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-md leading-2 font-medium text-gray-900">
          Profile details
        </h3>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-5 grid grid-cols-4 gap-4 px-6">
            <dt className="text-sm font-medium text-gray-500">Name</dt>
            <dd className="mt-1 text-sm text-gray-900 mt-0 col-span-2">
              John Doe
            </dd>
            <dd className="mt-1 text-sm text-gray-500 mt-0 flex justify-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                cursor="pointer"
                strokeWidth={2}
                id="name"
                onClick={openModal}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
            </dd>
          </div>
          <div className="bg-white px-4 py-5 grid grid-cols-4 gap-4 px-6">
            <dt className="text-sm font-medium text-gray-500">Email</dt>
            <dd className="mt-1 text-sm text-gray-900 mt-0 col-span-2">
              adescuma@yahoo.com
            </dd>
            <dd className="mt-1 text-sm text-gray-500 mt-0 flex justify-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                cursor="pointer"
                strokeWidth={2}
                id={"email"}
                onClick={openModal}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 grid grid-cols-4 gap-4 px-6">
            <dt className="text-sm font-medium text-gray-500">Password</dt>
            <dd className="mt-1 text-sm text-gray-900 mt-0 col-span-2">
              ************
            </dd>
            <dd className="mt-1 text-sm text-gray-500 sm:mt-0 flex justify-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                cursor="pointer"
                strokeWidth={2}
                id={"password"}
                onClick={openModal}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
            </dd>
          </div>
        </dl>
      </div>
      <Link to="/dashboard">
        <button
          type="submit"
          className="group relative w-full flex justify-center mt-4 py-2 px-4 border border-transparent text-sm font-bold rounded-md text-black bg-yellow-300 hover:bg-yellow-500 focus:outline-none"
        >
          <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
          Back to dashboard
        </button>
      </Link>
      <EditProfile
        edit={edit}
        isOpen={isOpen}
        openModal={openModal}
        closeModal={closeModal}
      />
      <div><Toaster/></div>
    </div>
  );
}
