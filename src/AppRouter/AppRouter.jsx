import AuthenticatedRouter from "./AuthenticatedRouter";
import UnauthenticatedRouter from "./UnauthenticatedRouter";
import { useAuth } from "../features/auth/useAuth";
// import { AuthButton } from '../features/auth/AuthButton';
import { useEffect } from "react";
import { useLocalStorage } from "../features/utils/useLocalStorage";
import { AuthContext } from "../features/auth/AuthContext";

function AppRouter() {
  // const [isAuth, setIsAuth] = useAuth();
  const [authValue, setAuthValue] = useLocalStorage("auth", null);
  const localStorageAuth = localStorage.getItem("auth");

  useEffect(() => {
    console.log({ authValue, localStorageAuth });
  }, [authValue, localStorageAuth]);
  if (authValue?.token) {
    return <AuthenticatedRouter />;
  }
  return (
    <AuthContext.Provider value={{authValue, setAuthValue}}>
      <UnauthenticatedRouter />
    </AuthContext.Provider>
  );
}

export default AppRouter;
