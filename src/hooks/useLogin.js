import axios from "axios";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { useAuthContext } from "./useAuthContext";

// eslint-disable-next-line no-unused-vars
const useLogin = (props) => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const { dispatch } = useAuthContext();
  // console.log("PROPS", props);

  const login = async (email, password) => {
    setError(null);

    const response = await axios.post(
      `https://thriftandloan.onrender.com/api/signin`,
      { email, password }
    );
    const res = response.data;
    console.log("ress", res);
    if (res.err) {
      setLoading(false);
      setError(res.err);
    }
    if (!res.err) {
      setLoading(true);
      console.log("welcome");

      localStorage.setItem("user", JSON.stringify(res));

      dispatch({ type: "LOGIN", payload: res });
      setLoading(false);
      navigate("/home");
    }
  };

  return { login, loading, error };
};

export default useLogin;
