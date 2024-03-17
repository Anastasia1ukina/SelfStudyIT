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

  return (
    <>
      <h1>Hello!</h1>
      <Link href="/login" variant="body2">
        {"Let's login again!"}
      </Link>
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
