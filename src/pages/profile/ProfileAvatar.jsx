import * as React from "react";
import defaultProfileImage from "../../assets/profile.png";
import { Avatar, Backdrop, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

export const ProfileAvatar = ({width, height, photoURL}) => {
    const { pending, user } = useAuth()
    const [profileImageUrl, setProfileImageUrl] = useState(photoURL || user?.photoURL || "");

    useEffect(() => {
        setProfileImageUrl(user?.photoURL)
    }, [user?.photoURL])

    if (pending) {
        return <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={pending}
        >
            <CircularProgress color="inherit" />
        </Backdrop>
    }

    return (
        <Avatar
            alt="profile"
            htmlFor="profileImage"
            src={profileImageUrl || defaultProfileImage}
            sx={{ cursor: "pointer", width, height }}
        ></Avatar>
    );
};
