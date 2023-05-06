import axios from "axios";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { useAuthContext } from "./useAuthContext";

// eslint-disable-next-line no-unused-vars
const useLogin = (props) => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(null);

  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setError(null);
    setLoading(true);
    try {
      const response = await axios.post(
        `https://thriftandloan.onrender.com/api/signin`,
        { email, password }
      );
      const res = response.data;
      setLoading(false);
      if (res) {
        setSuccess("Login Successful");
      }
      localStorage.setItem("user", JSON.stringify(res));

      dispatch({ type: "LOGIN", payload: res });
      setLoading(false);
      navigate("/profile");
    } catch (error) {
      const res = error.response;
      setLoading(false);
      setError(res.data);
      console.log(res.data);
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error, success, setError };
};

export default useLogin;
