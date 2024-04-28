import * as React from "react";
import defaultProfileImage from "../../assets/fiona.jpg";
import { Avatar, TextField, Box, Button } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { AuthContext } from "../../features/auth/AuthContext";
import { useContext, useEffect } from "react";
import { PasswordField } from "../auth/PasswordField";
import { getAuth, updateProfile, updatePassword } from "firebase/auth";
import useAuth from "../../hooks/useAuth";

export const ProfileAvatar = () => {
  const { authValue, setAuthValue } = useContext(AuthContext);
  // const auth = getAuth();
  const { pending, user, auth } = useAuth()
  // const user = auth.currentUser;
  const [profileImageUrl, setProfileImageUrl] = React.useState(user?.photoURL || "");

  useEffect(() => {
    console.log(user, "currentUser")
  }, [user])

  const { control, handleSubmit, watch, formState: { errors } } = useForm({
    defaultValues: {
      profileImage: "",
      username: "",
      lastName: "",
      email: "",
      newPassword: "",
      confirmedNewPassword: "",
    },
  });

  const updateProfileImage = async (imageData) => {
    try {
      const storage = getStorage();
      const storageRef = ref(storage, 'images/' + imageData.name);
      const snapshot = await uploadBytes(storageRef, imageData);
      const downloadURL = await getDownloadURL(snapshot.ref);

      await updateProfile(auth.currentUser, { photoURL: downloadURL });
      setProfileImageUrl(downloadURL);
    } catch (error) {
      console.log("An error occurred", error);
    }
  }

  const updateProfilePassword = async (newPassword) => {
    try {
      await updatePassword(user, newPassword);
    } catch (error) {
      console.log("An error occurred", error);
    }
  }

  const onSubmit = async (profileFormData) => {
    await updateProfileImage(profileFormData.profileImage);

    if (profileFormData.newPassword) {
      await updateProfilePassword(profileFormData.newPassword);
    }
  };

  if (pending) {
    return <h1>waiting...</h1>
  }

  return (
    <Box
      component="form"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      borderRadius="50px"
      sx={{
        mt: 1,
        ml: "auto",
        mr: "auto",
        padding: "30px 40px",
        backgroundColor: "#f5f5f5",
        width: "90%",
        maxWidth: "500px",
      }}
    >
      <Avatar
        alt="profile"
        htmlFor="profileImage"
        src={profileImageUrl || defaultProfileImage}
        sx={{ cursor: "pointer", width: 150, height: 150 }}
      ></Avatar>
      <Controller
        name="profileImage"
        control={control}
        render={({ field: { value, onChange, ...field } }) => {
          return (
            <TextField
              {...field}
              value={value?.fileName}
              onChange={(event) => {
                onChange(event.target.files[0]);
                console.log(event.target.files[0]);
              }}
              margin="normal"
              variant="standard"
              label="Profile Image"
              autoFocus
              type="file"
            />
          );
        }}
      />
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            margin="normal"
            variant="standard"
            fullWidth
            label="Email Address"
            autoComplete="email"
            autoFocus
            // value={userEmail}
            readOnly
          />
        )}
      />
      <Controller
        name="newPassword"
        control={control}
        rules={{ minLength: 6 }}
        render={({ field }) => (
          <>
            <PasswordField field={field} label="New Password" />
            {errors.password &&
              errors.password.type === "minLength" && (
                <span>
                  Password must be at least 6 characters long
                </span>
              )}
          </>
        )}
      />
      <Controller
        name="confirmedNewPassword"
        control={control}
        rules={{
          required: true,
          validate: (value) => value === watch("newPassword"),
        }}
        render={({ field }) => (
          <>
            <PasswordField field={field} label="Confirmed New Password" />
            {errors.confirmedPassword &&
              errors.confirmedPassword.type === "required" && (
                <span>This field is required</span>
              )}
            {errors.confirmedPassword &&
              errors.confirmedPassword.type === "validate" && (
                <span>Passwords do not match</span>
              )}
          </>
        )}
      />
      <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
        Save
      </Button>
    </Box>
  );
};
