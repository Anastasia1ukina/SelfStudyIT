import {
    useFetcher,
    useRouteLoaderData,
} from 'react-router-dom'

export default function AuthStatus() {
    // Get our logged in user, if they exist, from the root route loader data
    const [user, setUser] = useState(null);
    const fetcher = useFetcher();

    useEffect(() => {
        const fetchData = async () => {
            const userData = await useRouteLoaderData("root");
            setUser(userData.user);
        };

        fetchData();
    }, []);

    if (!user) {
        return <p>You are not logged in.</p>;
    }

    let isLoggingOut = fetcher.formData != null;

    return (
        <div>
            <p>Welcome {user}!</p>
            <fetcher.Form method="post" action="/logout">
                <button type="submit" disabled={isLoggingOut}>
                    {isLoggingOut ? "Signing out..." : "Sign out"}
                </button>
            </fetcher.Form>
        </div>
    );
}