import * as React from "react";
import { AuthLayout } from "../../layout/AuthLayout";
import { ProfileAvatarForm } from "./ProfileAvatarForm";

export const ProfilePage = () => {
  return (
    <AuthLayout>
      <ProfileAvatarForm />
    </AuthLayout>
  );
};
