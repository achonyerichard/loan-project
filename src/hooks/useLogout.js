import axios from 'axios'
import React ,{useState} from 'react'
import { useNavigate } from 'react-router-dom';


import { useAuthContext } from './useAuthContext'

const useLogout = (props) => {
  const navigate = useNavigate();
  const [data,setData] =useState(null)
    // const  { dispatch }  = useAuthContext()
    const { dispatch } = useAuthContext();


    const logout = async (email,password) =>{
      axios.post("https://spcf-api.onrender.com/beneficiary/clear")
      .then(response => {
        setData(response);
        localStorage.removeItem("user")
        navigate("/login")
      })
      .catch(error => {
       
        
      });
console.log("goodbye",data);        

        dispatch({type:'LOGOUT'})
      
      
       
       
    }

  return {logout}
}

export default useLogout