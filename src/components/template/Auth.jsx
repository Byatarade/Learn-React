const Auth = ({ children }) => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow w-80">
        {children}
      </div>
    </div>
  );
};

export default Auth;