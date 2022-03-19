import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col gap-4 justify-center">
      <h1 className="font-bold text-center">There's nothing here</h1>
      <Link to="/">
        <button
          type="submit"
          className="group relative w-full flex justify-center mt-4 py-2 px-4 border border-transparent text-sm font-bold rounded-md text-black bg-white hover:bg-yellow-500 focus:outline-none"
        >
          <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
          Go back home
        </button>
      </Link>
    </div>
  );
}
