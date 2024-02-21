import { Link } from 'react-router-dom';
import { AuthButton } from '../../features/auth/AuthButton';
import { useAuth } from '../../features/auth/useAuth';

export const SignupPage = () => {
    const [isAuth, setIsAuth] = useAuth();
    return (
        <>
            <h1> Hello Signup Page!</h1>
            <Link href="/login">Login</Link>
            {/* <AuthButton isAuth={isAuth} setIsAuth={setIsAuth} /> */}
        </>
    );
}