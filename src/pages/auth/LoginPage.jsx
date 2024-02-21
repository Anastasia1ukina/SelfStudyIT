import { Link } from 'react-router-dom';

export const LoginPage = () => {
    return (
        <>
            <h1> Hello Login Page!</h1>
            <Link to="/signup">Sign Up</Link>
        </>
    );
}