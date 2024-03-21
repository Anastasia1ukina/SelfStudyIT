import * as React from "react";
import Link from "@mui/material/Link";
import { Button } from "@mui/material";

import { useContext, useEffect } from "react";
import { AuthContext } from "../../features/auth/AuthContext";
// import { getUserData } from "../../features/auth/manageUsers";

export const HomePage = () => {
  const { authValue, setAuthValue } = useContext(AuthContext);

  //   useEffect(() => {
  //     getUserData();
  //   }, []);

  const resetAuth = () => {
    setAuthValue(null);
  };

  // const userData = localStorage.getItem(
  //   "firebase:authUser:AIzaSyCbeZ_RKH2WvK2RnRLDvH5SSLlDZIUmNa4:[DEFAULT]"
  // );
  const userEmail = authValue.email;
  // const userDataParsed = JSON.parse(userData);
  // const userEmail = userDataParsed.email;

  return (
    <>
      <h1>Домашняя страница</h1>
      <p>Вы вошли в систему как: {userEmail}</p>
      <Button
        onClick={resetAuth}
        type="submit"
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        Logout
      </Button>
    </>
  );
};
