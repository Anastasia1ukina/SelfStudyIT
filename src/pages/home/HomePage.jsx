import * as React from "react";
import Link from "@mui/material/Link";

export const HomePage = () => {

    return (
        <>
            <h1>Hello!</h1>
            <Link href="/login" variant="body2">
                {"Let's login again!"}
            </Link>
        </>
    );
};
