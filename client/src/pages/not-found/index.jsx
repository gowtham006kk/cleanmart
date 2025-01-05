function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <h2 className="text-2xl text-gray-600 mb-2">Page Not Found</h2>
      <p className="text-gray-500 mb-6">
        Oops! The page you are looking for does not exist or has been moved.
      </p>
      <a
        href="/"
        className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
      >
        Back to Home
      </a>
      <img
        src="/path-to-your-image.svg"
        alt="Not Found Illustration"
        className="mt-8 max-w-full sm:max-w-md"
      />
    </div>
  );
}

export default NotFound;
