import Avatar from "./Avatar";
import ProfileName from "./ProfileName";
import EditProfile from "./EditProfile";
import React from "react";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

export default function Profile() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [edit, setEdit] = React.useState();

  function closeModal() {
    setIsOpen(false);
    const editedParameter = edit.charAt(0).toUpperCase() + edit.substring(1);
    toast.success(editedParameter + " updated");
  }

  function openModal(e) {
    const id = e.target.id;
    setEdit((prev) => (prev = id));
    setIsOpen(true);
  }

  return (
    <div className=" min-w-3xl w-11/12 max-w-4xl max-h-min overflow-hidden rounded-xl bg-white sm:p-7 p-3 shadow sm:rounded-lg">
      <Avatar />
      <div className="m-auto mt-6 text-center">
        <ProfileName />
      </div>
      <div className="py-5">
        <h3 className="text-md leading-2 font-medium text-gray-900">
          Profile details
        </h3>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="grid grid-cols-4 gap-4 bg-gray-50 px-2 sm:px-4 py-3">
            <dt className="text-sm font-medium text-gray-500">Name</dt>
            <dd className="col-span-2 mt-1 text-sm text-gray-900">John Doe</dd>
            <dd className="mt-1 flex justify-end text-sm text-gray-500">
              <div
                className="cursor-pointer rounded border border-gray-400 px-4 py-1 text-black hover:bg-gray-200 active:scale-95"
                id="password"
                onClick={openModal}
              >
                Edit
              </div>
            </dd>
          </div>
          <div className="grid grid-cols-4 gap-4 bg-white px-2 sm:px-4 py-3">
            <dt className="text-sm font-medium text-gray-500">Email</dt>
            <dd className="col-span-2 mt-1 text-sm text-gray-900">
            operation@gobutton.me
            </dd>
            <dd className="mt-1 flex justify-end text-sm text-gray-500">
              <div
                className="cursor-pointer rounded border border-gray-400 px-4 py-1 text-black hover:bg-gray-200 active:scale-95"
                id="password"
                onClick={openModal}
              >
                Edit
              </div>
            </dd>
          </div>
          <div className="grid grid-cols-4 gap-4 bg-gray-50 px-2 sm:px-4 py-3">
            <dt className="text-sm font-medium text-gray-500">Password</dt>
            <dd className="col-span-2 mt-1 text-sm text-gray-900">
              ************
            </dd>
            <dd className="mt-1 flex justify-end text-sm text-gray-500 sm:mt-0">
              <div
                className="cursor-pointer rounded border border-gray-400 px-4 py-1 text-black hover:bg-gray-200 active:scale-95"
                id="password"
                onClick={openModal}
              >
                Edit
              </div>
            </dd>
          </div>
        </dl>
      </div>
      <Link to="/dashboard">
        <button
          type="submit"
          className="group relative mt-4 flex w-full max-w-lg m-auto justify-center rounded-md border border-transparent bg-yellow-300 py-2 px-4 text-sm font-bold text-black hover:bg-yellow-500 focus:outline-none"
        >
          <span className="absolute inset-y-0 left-0 flex items-center pl-3"></span>
          Back to dashboard
        </button>
      </Link>
      <EditProfile
        edit={edit}
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
