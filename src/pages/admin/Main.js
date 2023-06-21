import React, { useState } from 'react';
import Login from './Login';
import HomeAdmin from'./Home';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Admin = () => {
  const [isLogedin,setIsLogedin]=useState(false);
  

  function setLogedIn(flag){
    setIsLogedin(flag);
  }
  return (
    <>
        {!isLogedin && <Login setLogin={setLogedIn}/>}
        {
          isLogedin && <HomeAdmin />
        }
    </>
  );
};

export default Admin;