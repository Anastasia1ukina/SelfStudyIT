import AuthenticatedRouter from './AuthenticatedRouter';
import UnauthenticatedRouter from './UnauthenticatedRouter';
import { useAuth } from '../features/auth/useAuth';
// import { AuthButton } from '../features/auth/AuthButton';
import { useEffect } from 'react';

function AppRouter() {
    const [isAuth, setIsAuth] = useAuth();
    useEffect(() => {
        console.log({ isAuth });
    }, [isAuth]);
    if (isAuth) {
        return <AuthenticatedRouter />;
    }
    return <>
        <UnauthenticatedRouter />
        {/* <AuthButton isAuth={isAuth} setIsAuth={setIsAuth} /> */}
    </>;
}

export default AppRouter;