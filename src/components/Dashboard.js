import Avatar from "./Avatar";
import { Link } from "react-router-dom";
import ProfileName from "./ProfileName";

export default function Dashboard() {
  return (
    <>
      <div className=" flex flex-col gap-7 items-center justify-center py-12 px-4 px-6 bg-white lg:px-8 w-4/5 min-w-max max-w-sm max-h-fit rounded-xl">
        <Avatar />
        <div className="max-w-md text-center space-y-1">
          <h2 className="w-full max-w-md space-y-8 text-center text-l font-bold text-gray-900">
            Welcome
          </h2>
          <ProfileName />
        </div>

        <div className="max-w-md w-full space-y-8">
          <Link to="/dashboard/profile">
            <button
              type="submit"
              className="group relative w-full flex justify-center mt-4 py-2 px-4 border border-transparent text-sm font-bold rounded-md text-black bg-yellow-300 hover:bg-yellow-500 focus:outline-none"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
              Edit Profile
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
