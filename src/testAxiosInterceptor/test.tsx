import React, { useEffect, useState } from 'react';
import axios from 'axios';
//import { request } from "./requests/request";
//import { setupInterceptorsTo } from "./requests/Interceptors";
import AxiosInterceptorNavigate from './requests/AxiosInterceptorNavigate';

function Test() {
  //setupInterceptorsTo(axios);

  const [val, setVal] = useState<any>();

  useEffect(() => {
    requestAPI();
  }, []);

  const requestAPI = async () => {
    try {
      const res = await axios.get('http://localhost:9999/testauth?q=testterm');
      setVal(JSON.stringify(res.data));
    } catch (err) {
      if (err instanceof Error) {
        setVal(err.message);
      }
      else {
        setVal('Unexpected error :: ' + err);
      }

    }
  }
 
  return (
    <div className="App">
      {val}
      Test
    </div>
  )
}

export default Test;
