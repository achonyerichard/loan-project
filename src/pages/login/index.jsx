import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, loading, success, setError } = useLogin();

  async function handleSubmit(e) {
    if (!email && !password) {
      setError("Email and Password cannot be empty");
    } else {
      e.preventDefault();
      await login(email, password);
    }
  }
  useEffect(() => {
    if (error) {
      toast.error(error, {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else if (success) {
      toast.success(success, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  }, [error, success]);
  return (
    <div className="bg-gray-50 bg-center bg-fixed font-poppins w-screen h-screen flex justify-center items-center">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className=" bg-white drop-shadow-2xl  lg:w-4/12 w-full md:w-3/4 h-auto px-6  pb-8 rounded-lg">
        <div className="w-full flex justify-center p-5">
          <img className="w-80" src="/logo.png" alt="logo2" />
        </div>
        <form className="w-full ">
          <div className="px-12 ">
            <div className="w-full mb-2">
              <div className="flex items-center">
                <input
                  name="email"
                  type="email"
                  value={email}
                  placeholder="Input your email"
                  className="mb-2 text-center  bg-gray-200   w-full border rounded placeholder:text-lg placeholder:text-black  py-2 text-black transition focus:outline-none"
                  onChange={(e) => {
                    setEmail(e.target.value);
                    console.log(e.target.value);
                  }}
                  required
                />
              </div>
            </div>
            <div className="w-full mb-2">
              <div className="flex items-center">
                <input
                  value={password}
                  name="password"
                  type="password"
                  placeholder="Password"
                  className=" text-center  bg-gray-200   w-full border rounded placeholder:text-lg placeholder:text-black  py-2 text-black transition focus:outline-none"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="mt-4 flex justify-center items-center">
              <button
                disabled={loading}
                onClick={handleSubmit}
                className=" text-lg bg-[color:#194383] text-white rounded px-12 py-2 bg-gradient-to-r from-[#6DBF58] to-[#1E4CA0]"
              >
                {loading ? "Loading..." : "Login"}
              </button>
            </div>
            <div className=" mt-5    ">
              <div className=" text-md flex justify-center items-center text-black">
                <p className="font-medium">
                  Dont have an account?
                  <Link to="/register">
                    {" "}
                    <span className="text-[#1E4CA0]"> Register</span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
