import * as React from "react";
import defaultProfileImage from "../../assets/fiona.jpg";
import { Avatar, TextField, Box, Button } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { AuthContext } from "../../features/auth/AuthContext";
import { useContext } from "react";
import { PasswordField } from "../auth/PasswordField";
import { getAuth, updateProfile } from "firebase/auth";

export const ProfileAvatar = () => {
  const { authValue, setAuthValue } = useContext(AuthContext);
  const auth = getAuth();

  const resetAuth = () => {
    setAuthValue(null);
  };

  const userName = authValue.username;
  const lastName = authValue.lastName;
  const userEmail = authValue.email;
  const userPassword = authValue.password;

  const { control, handleSubmit, watch, formState: { errors } } = useForm({
    defaultValues: {
      profileImage: "",
      username: "",
      lastName: "",
      email: "",
      password: "",
      confirmedPassword: "",
    },
  });

  const onSubmit = async (data) => {
    const storage = getStorage();
    const storageRef = ref(storage, 'images/' + data.profileImage.name);
    console.log({data})

    uploadBytes(storageRef, data.profileImage).then((snapshot) => {
      console.log('Uploaded a blob or file!', snapshot, storageRef);

      getDownloadURL(snapshot.ref).then((downloadURL) => {
        console.log('File available at', downloadURL);

        updateProfile(auth.currentUser, {
          photoURL: downloadURL
        }).then(() => {
          console.log("Profile updated!");
        }).catch((error) => {
          console.log("An error occurred", error);
        });
      });
    });
    
    // const { email, password } = data;

    // await createUserWithEmailAndPassword(auth, email, password)
    //   .then((userCredential) => {
    //     // Signed in
    //     const user = userCredential.user;
    //     console.log(user);
    //     navigate("/login");
    //     // ...
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     console.log(errorCode, errorMessage);
    //     // ..
    //   });
  };

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
        src={defaultProfileImage}
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
            value={userEmail}
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
