import { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuthContext } from './useAuthContext';

function useApi(url) {
  const user = useAuthContext();
  const token = user?.user?.token;
console.log("omo",token);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setIsLoading(true);
    axios.get(url, {
      headers: {
        "x-auth-token": token,
      },
    })
      .then(response => {
        setData(response.data);
     
        setIsLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setIsLoading(false);
      });
  }, [url]);

  return [data, isLoading, error];
}

export default useApi