import avi from "../avi.png";

export default function HomePage() {
  return (
    <>
      <div className=" flex items-center justify-center py-12 px-4 sm:px-6 bg-white lg:px-8 w-2/5 min-w-fit max-h-fit rounded-xl">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-20 h-auto rounded-full"
              src={avi}
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-xl font-extrabold text-gray-900">
              Welcome username
            </h2>
          </div>

          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-black bg-yellow-300 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
          >
            <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
            Edit Profile
          </button>
        </div>
      </div>
    </>
  );
}
