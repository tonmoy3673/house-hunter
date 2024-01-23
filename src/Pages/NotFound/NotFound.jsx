import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="grid lg:min-h-full min-h-screen place-items-center bg-white px-6 py-16 sm:py-32 lg:px-8">
      <div className="container text-center">
        <p className="text-[60px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
          404
        </p>
        <h1 className="mt-4 py-3 text-3xl font-bold leading-relaxed tracking-tight text-gray-900 sm:text-5xl title-font text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
          Page not found
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to="/"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Go back home
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
