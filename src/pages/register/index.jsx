// import useLogin from "../../hooks/useLogin";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as nigerianStates from "nigerian-states-and-lgas";
import useSignUp from "../../hooks/useSignup";

const Register = () => {
  const states = nigerianStates.all();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [gender, setGender] = useState("");
  const [savings, setSavings] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedLga, setSelectedLga] = useState("");

  const [filteredLga, setFilteredLga] = useState([]);
  const { signup } = useSignUp();

  const date = new Date(selectedDate);

  let reversedDate = date.toLocaleDateString().split("/");

  reversedDate = `${reversedDate[2]}-${reversedDate[0].padStart(2, 0)}-${
    reversedDate[1]
  }`;
  console.log(reversedDate);
  const data = {
    firstname: firstName,
    lastname: lastName,
    gender: gender,
    state: selectedState,
    lga: selectedLga,
    dob: reversedDate,
    email: email,
    password: password,
    savingsType: savings,
  };

  async function handleSubmit(e) {
    e.preventDefault();
    await signup(data);
    console.log("DATA", data);
  }

  useEffect(() => {
    const filteredStates = states?.filter(
      (state) => state?.state === selectedState
    );

    setFilteredLga(filteredStates[0]?.lgas);
    console.log(typeof filteredStates[0]?.lgas);
    console.log(filteredStates[0]?.lgas);
  }, [selectedState, states]);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <div className="bg-gray-50 bg-center mt-10 bg-fixed font-poppins w-screen h-screen flex justify-center items-center">
      <div className=" bg-white drop-shadow-2xl  lg:w-2/5 w-full md:w-3/4 h-auto px-6  pb-8 rounded-lg">
        <div className="w-full flex justify-center p-5">
          <img className="w-80" src="/logo.png" alt="logo2" />
        </div>
        <form className="w-full " onSubmit={handleSubmit}>
          <div className="px-4 flex flex-col items-center lg:mx-auto lg:grid grid-cols-2 lg:gap-y-4 gap-y-2 lg:gap-x-2 lg:py-4 ">
            <div className="w-full ">
              <div className="flex flex-col">
                <label
                  htmlFor="firstName"
                  className="text-black text-sm font-semibold pb-2"
                >
                  First Name:
                </label>
                <input
                  name="firstName"
                  type="text"
                  placeholder="Input your first name"
                  className=" text-center  bg-gray-200   w-full border rounded placeholder:text-md placeholder:text-black  py-2 text-black transition focus:outline-none"
                  onChange={(e) => {
                    setFirstName(e.target.value);
                    console.log(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="w-full ">
              <div className="flex flex-col ">
                <label
                  htmlFor="lastName"
                  className="text-black text-sm font-semibold pb-2"
                >
                  Last Name:
                </label>
                <input
                  name="lastName"
                  type="text"
                  placeholder="Input your last name"
                  className=" text-center  bg-gray-200   w-full border rounded placeholder:text-md placeholder:text-black  py-2 text-black transition focus:outline-none"
                  onChange={(e) => {
                    setLastName(e.target.value);
                    console.log(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="w-full ">
              <div className="flex flex-col ">
                <label
                  htmlFor="gender"
                  className="text-black text-sm font-semibold pb-2"
                >
                  Gender:
                </label>
                <select
                  name="gender"
                  id=""
                  className=" text-center  bg-gray-200   w-full border rounded placeholder:text-md placeholder:text-black  py-2 text-black transition focus:outline-none"
                  onChange={(e) => setGender(e.target.value)}
                  required
                >
                  <option value="">Select your Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>
            <div className="w-full ">
              <div className="flex flex-col">
                <label
                  htmlFor="firstName"
                  className="text-black text-sm font-semibold pb-2"
                >
                  Email:
                </label>
                <input
                  name="email"
                  type="email"
                  value={email}
                  placeholder="Input your first name"
                  className=" text-center  bg-gray-200   w-full border rounded placeholder:text-md placeholder:text-black  py-2 text-black transition focus:outline-none"
                  onChange={(e) => {
                    setEmail(e.target.value);
                    console.log(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="w-full ">
              <div className="flex flex-col ">
                <label
                  htmlFor="states"
                  className="text-black text-sm font-semibold pb-2"
                >
                  States:
                </label>
                <select
                  id="state-select"
                  className=" text-center  bg-gray-200   w-full border rounded placeholder:text-md placeholder:text-black  py-2 text-black transition focus:outline-none"
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                >
                  <option value="">Select State</option>
                  {states.map((state) => (
                    <option key={state?.state} value={state?.state}>
                      {state?.state}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="w-full ">
              <div className="flex flex-col ">
                <label
                  htmlFor="lgas"
                  className="text-black text-sm font-semibold pb-2"
                >
                  Lgas:
                </label>
                <select
                  id="lga-select"
                  className=" text-center  bg-gray-200   w-full border rounded placeholder:text-md placeholder:text-black  py-2 text-black transition focus:outline-none"
                  value={selectedLga}
                  onChange={(e) => setSelectedLga(e.target.value)}
                >
                  <option value="">Select Lgas</option>
                  {selectedState &&
                    filteredLga?.map((lga, index) => (
                      <option key={index} value={lga}>
                        {lga}
                      </option>
                    ))}
                </select>
              </div>
            </div>
            <div className="w-full ">
              <div className="flex flex-col">
                <label
                  htmlFor="dob"
                  className="text-black text-sm font-semibold pb-2"
                >
                  Date of Birth:
                </label>
                <input
                  name="dob"
                  type="date"
                  value={selectedDate}
                  className=" text-center datepicker-input  bg-gray-200   w-full border rounded placeholder:text-md placeholder:text-gray-600  py-2 text-gray-600 transition focus:outline-none"
                  onChange={handleDateChange}
                />
              </div>
            </div>
            <div className="w-full ">
              <div className="flex flex-col ">
                <label
                  htmlFor="savings"
                  className="text-black text-sm font-semibold pb-2"
                >
                  Savings Type:
                </label>
                <select
                  name="savings"
                  id=""
                  className=" text-center  bg-gray-200   w-full border rounded placeholder:text-md placeholder:text-black  py-2 text-black transition focus:outline-none"
                  onChange={(e) => setSavings(e.target.value)}
                  required
                >
                  <option value="">Select your Type</option>
                  <option value="Daily">Daily</option>
                  <option value="Weekly">Weekly</option>
                  <option value="Monthly">Monthly</option>
                </select>
              </div>
            </div>
            <div className="w-full ">
              <div className="flex flex-col ">
                <label
                  htmlFor="savings"
                  className="text-black text-sm font-semibold pb-2"
                >
                  Pasword:
                </label>
                <input
                  value={password}
                  name="password"
                  type="password"
                  placeholder="Password"
                  className=" text-center  bg-gray-200   w-full border rounded placeholder:text-md placeholder:text-black  py-2 text-black transition focus:outline-none"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="w-full ">
              <div className="flex flex-col ">
                <label
                  htmlFor="savings"
                  className="text-black text-sm font-semibold pb-2"
                >
                  Confirm Password:
                </label>
                <input
                  value={confirmpassword}
                  name="confirmpassword"
                  type="password"
                  placeholder="Confirm Password"
                  className=" text-center  bg-gray-200   w-full border rounded placeholder:text-lg placeholder:text-black  py-2 text-black transition focus:outline-none"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="mt-4 flex justify-center items-center">
            <button
              //   disabled={loading}

              className=" text-lg bg-[color:#194383] text-white rounded px-12 py-2 bg-gradient-to-r from-[#6DBF58] to-[#1E4CA0]"
            >
              Register
            </button>
            {/* {error && <div className="p-2 border border-red-500 text-red-800">{error}</div>} */}
          </div>
          <div className=" mt-5    ">
            <div className=" text-md flex justify-center items-center text-black">
              <p className="font-medium">
                Already have an account?
                <Link to="/">
                  {" "}
                  <span className="text-[#1E4CA0]"> Login</span>
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
