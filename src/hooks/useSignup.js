import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import axios from "axios";

import { useNavigate } from "react-router-dom";

// eslint-disable-next-line no-unused-vars
const useSignUp = (props) => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const { dispatch } = useAuthContext();

  const signup = async (data) => {
    setIsLoading(true);
    setError(null);
  
    const response = await axios.post(
      `https://thriftandloan.onrender.com/api/member/register`,
      data
    );
    const res = response.data;

    if (res.err) {
      setIsLoading(false);
      setError(res.err);
    }
    if (!res.err) {
      console.log("welcome");

      localStorage.setItem("user", JSON.stringify(res));

      dispatch({ type: "LOGIN", payload: res });
      setIsLoading(false);
      navigate("/home");
    }
  };
  return { signup, isLoading, error };
};

export default useSignUp;
