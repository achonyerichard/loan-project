import { useState } from "react";
// import { useAuthContext } from "./useAuthContext";
import axios from "axios";

// import { useNavigate } from "react-router-dom";

// eslint-disable-next-line no-unused-vars
const useSignUp = (props) => {
  // const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  // const { dispatch } = useAuthContext();

  const signup = async (data) => {
    setIsLoading(true);
    setError(null);
    console.log("hi", data);
    const response = await axios.post(
      `https://thriftandloan.onrender.com/api/member/register`,
      data
    );
    const json =  response;
    console.log(json);
    // if (json.err) {
    //   setIsLoading(false);
    //   setError(json.err);
    // }
    // if (!json.err) {
    //   console.log("welcome");

    //   localStorage.setItem("user", JSON.stringify(json.beneficiary));

    //   dispatch({ type: "LOGIN", payload: json.beneficiary });
    //   setIsLoading(false);
    //   navigate("/otp");
    // }
  };
  return { signup, isLoading, error };
};

export default useSignUp;
