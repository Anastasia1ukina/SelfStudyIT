import * as React from "react";
import { AuthLayout } from "../../layout/AuthLayout";
import { ProfileAvatar } from "./ProfileAvatar";

export const ProfilePage = () => {
  return (
    <AuthLayout>
      <ProfileAvatar />
    </AuthLayout>
  );
};
