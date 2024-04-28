import { useState, useEffect } from "react";
import { auth } from "../firebase";

const useAuth = () => {
    const [authState, setAuthState] = useState({
        pending: true,
        user: auth.currentUser,
    })

    useEffect(() => {
        const unregisterAuthObserver = auth.onAuthStateChanged(user =>
            setAuthState({ user, pending: false })
        )
        return () => unregisterAuthObserver()
    }, [])

    return { auth, ...authState }
}

export default useAuth;