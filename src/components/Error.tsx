const Error = () => {
  return (
    <div className="flex flex-1 justify-center items-center">
      <div role="alert">
        <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">Error</div>
        <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
          <p>Sorry something is not working, please try again later.</p>
        </div>
      </div>
    </div>
  );
};

export default Error;
