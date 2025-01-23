const SignUp = () => {
    return (
      <main className="w-full h-full flex justify-center mt-32">
        <div className="flex flex-col justify-center gap-8 w-5/6 md:h-4/6 lg:w-3/6 xl:w-1/2">
          <div className="text-center">
            <h1 className="text-3xl font-medium">Create a new account</h1>
            <p>
              Already have an account?{" "}
              <a href="" className="text-blue-500 underline">
                Sign in
              </a>
            </p>
          </div>
  
          <form className="flex flex-col gap-8">
            <div className="flex items-center gap-4 justify-between">
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="firstName" className="text-sm font-medium">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="First Name"
                  id="firstName"
                  className="border border-slate-400 p-2 rounded"
                />
              </div>
  
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="lastName" className="text-sm font-medium">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Last Name"
                  id="lastName"
                  className="border border-slate-400 p-2 rounded"
                />
              </div>
            </div>
  
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                placeholder="Email"
                id="email"
                className="border border-slate-400 p-2 rounded"
              />
            </div>
  
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="password" className="text-sm font-medium">
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                id="password"
                className="border border-slate-400 p-2 rounded"
              />
            </div>
  
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="confirmpassword" className="text-sm font-medium">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Confirm Password"
                id="confirmpassword"
                className="border border-slate-400 p-2 rounded"
              />
            </div>
  
            <button className="bg-blue-500 hover:bg-blue-900 text-white px-8 py-3 rounded text-lg font-semibold">
              Sign Up
            </button>
          </form>
        </div>
      </main>
    );
  };
  
  export default SignUp;
  