import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    
      <div className="flex items-center justify-center w-4/5 min-w-max max-w-sm">
        <div className="px-10 py-20 bg-white rounded-md shadow-xl">
          <div className="flex flex-col items-center">
            <h1 className="font-bold text-blue-600 text-9xl">404</h1>

            <h6 className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
              <span className="text-red-500">Oops!</span> Page not found
            </h6>

            <p className="mb-8 text-center text-gray-500 md:text-lg">
              The page you’re looking for doesn’t exist.
            </p>

            <Link to="/dashboard">
              <button
                type="submit"
                className="group relative w-full flex justify-center mt-4 py-2 px-4 border border-transparent text-sm font-bold rounded-md text-black bg-yellow-500 hover:bg-yellow-500 focus:outline-none"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
                Go back home
              </button>
            </Link>
          </div>
        </div>
      </div>
    
  );
}
