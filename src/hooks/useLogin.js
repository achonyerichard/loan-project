import axios from "axios";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { useAuthContext } from "./useAuthContext";

// eslint-disable-next-line no-unused-vars
const useLogin = (props) => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  // const  { dispatch }  = useAuthContext()
  const { dispatch } = useAuthContext();
  // console.log("PROPS", props);

  const login = async (email, password) => {
    setError(null);

    const response = await axios.post(
      `https://thriftandloan.onrender.com/api/signin`,
      { email, password }
    );
    const json = response;
    console.log("ress", json);
    if (json.err) {
      setLoading(false);
      setError(json.err);
    }
    if (!json.err) {
      setLoading(true);
      console.log("welcome");

      // localStorage.setItem("user", JSON.stringify(json.beneficiary));

      dispatch({ type: "LOGIN", payload: json.beneficiary });
      setLoading(false);
      navigate("/");
    }
  };

  return { login, loading, error };
};

export default useLogin;
