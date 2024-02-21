import {
    redirect,
} from 'react-router-dom'

export async function LoginLoader() {
    if (fakeAuthProvider.isAuthenticated) {
        return redirect("/");
    }
    return null;
}