import Avatar from "./Avatar";
import { Link, useOutletContext } from "react-router-dom";
import ProfileName from "./ProfileName";
import Login from "./Login";
import React from "react";

export default function Dashboard() {
  const [user,token] = useOutletContext();

  return (
    <>
      <div className=" flex max-h-fit w-4/5 min-w-max max-w-sm flex-col items-center justify-center gap-7 rounded-xl bg-white py-12 px-4 lg:px-8">
        <Avatar />
        <div className="max-w-md space-y-1 text-center">
          <h2 className="text-l w-full max-w-md space-y-8 text-center font-bold text-gray-900">
            Welcome
          </h2>
          <ProfileName name={user.name}/>
        </div>

        <div className="w-full max-w-md space-y-8">
          <Link to="/dashboard/profile">
            <button
              type="submit"
              className="group relative mt-4 flex w-full justify-center rounded-md border border-transparent bg-yellow-300 py-2 px-4 text-sm font-bold text-black hover:bg-yellow-500 focus:outline-none"
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3"></span>
              Edit Profile
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
