import axios from "axios";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useEffect, useState } from "react";
import useApi from "../../hooks/useApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Profile = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);

  const [data] = useApi(
    "https://thriftandloan.onrender.com/api/member/userprofile"
  );
  console.log(data);

  const user = useAuthContext();
  const token = user?.user?.token;
  const name = data?.firstname;

  async function handleSubmit(e) {
    setLoading(true);
    e.preventDefault();

    await axios
      .put(
        `https://thriftandloan.onrender.com/api/member/update
      `,
        { firstname: firstName, lastname: lastName, password: password },
        {
          headers: {
            "x-auth-token": token,
          },
        }
      )
      .then((result) => {
        console.log("Post request, results", result);

        setLoading(false);
        setSuccess("Profile Updated Succesfully");
        window.location.reload();
        setFirstName("");
        setLastName("");
        setPassword("");
      })
      .catch((error) => {
        console.log("Errors", error);
        setError(error.message);
        setLoading(false);
        setFirstName("");
        setLastName("");
        setPassword("");
      });
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
    <>
   
      <main className="bg-white  p-5 lg:p-10">
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
        <header>
          <h1 className="text-4xl font-semibold text-[#1E4CA1]">
            Welcome {name},
          </h1>
        </header>
        <form>
          <div className="w-full  rounded-lg mx-auto  flex overflow-hidden  rounded-b-none ">
            <div className=" md:w-1/2 mt-10 md:mt-0">
              <hr className="border-gray-200" />
              <div className="py-4 ">
                <label htmlFor="firstname" className="text-sm text-black">
                  First Name
                </label>
                <input
                  placeholder={data?.firstname}
                  className=" text-center  bg-gray-200   w-full border rounded placeholder:text-lg placeholder:text-black  py-2 text-black transition focus:outline-none"
                  type="text"
                  name="firstname"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <hr className="border-gray-200" />
              <div className="py-4 ">
                <label htmlFor="lastname" className="text-sm text-black">
                  Last Name
                </label>
                <input
                  placeholder={data?.lastname}
                  className=" text-center  bg-gray-200   w-full border rounded placeholder:text-lg placeholder:text-black  py-2 text-black transition focus:outline-none"
                  type="text"
                  name="lastname"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="py-4 ">
                <label htmlFor="password" className="text-sm text-black">
                  Password
                </label>
                <input
                  placeholder="Input new Password"
                  className=" text-center  bg-gray-200   w-full border rounded placeholder:text-lg placeholder:text-black  py-2 text-black transition focus:outline-none"
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className=" pt-2 md:pt-5  rounded-b-lg border-t border-gray-200 flex justify-end">
                <button
                  disabled={loading}
                  className={
                    "bg-gradient-to-r from-[#6DBF58] to-[#1E4CA0] hover:bg-gradient-to-l hover:from-[#6DBF58] hover:to-[#1E4CA0] transition-colors ease-in-out rounded-md text-white px-4 py-2 flex justify-center"
                  }
                  onClick={handleSubmit}
                >
                  {loading ? "Loading..." : "Submit"}
                </button>
              </div>
            </div>
          </div>
        </form>
        
      </main>
    
    </>
  );
};

export default Profile;
