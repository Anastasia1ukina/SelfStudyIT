import * as React from "react";
import defaultProfileImage from "../../assets/fiona.jpg";
import { Avatar, TextField, Box, Button } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { getStorage, ref, uploadBytes } from "firebase/storage";

export const ProfileAvatar = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      profileImage: "",
    },
  });

  const onSubmit = async (data) => {
    const storage = getStorage();
    const storageRef = ref(storage, "profile-image");

    uploadBytes(storageRef, data.profileImage).then((snapshot) => {
      console.log('Uploaded a blob or file!', snapshot, storageRef);
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
      // sx={{
      //   mt: 1,
      //   width: "90%",
      //   maxWidth: "500px",
      // }}
    >
      <Avatar
        alt="profile"
        htmlFor="profileImage"
        src={defaultProfileImage}
        sx={{ width: 150, height: 150 }}
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
              fullWidth
              label="Profile Image"
              autoFocus
              type="file"
            />
          );
        }}
      />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Save
      </Button>
    </Box>
  );
};
