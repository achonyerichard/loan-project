import { useAuthContext } from "./useAuthContext";

// eslint-disable-next-line no-unused-vars
const useLogout = (props) => {
  // const  { dispatch }  = useAuthContext()
  const { dispatch } = useAuthContext();

  // eslint-disable-next-line no-unused-vars
  const logout = async (email, password) => {
    localStorage.removeItem("user");

    dispatch({ type: "LOGOUT" });
  };

  return { logout };
};

export default useLogout;
