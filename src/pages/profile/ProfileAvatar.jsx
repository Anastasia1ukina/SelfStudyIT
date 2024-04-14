import * as React from "react";
import defaultProfileImage from "../../assets/fiona.jpg";
import { Avatar, TextField, Input } from "@mui/material";
import { useForm, Controller } from "react-hook-form";

export const ProfileAvatar = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      profileImage: null,
    },
  });

  return (
    <>
      <Avatar
        alt="profile"
        htmlFor="profileImage"
        src={defaultProfileImage}
        sx={{ width: 150, height: 150 }}
      ></Avatar>
      <Input type="file" accept="image/*" id="profileImage" />
      {/* <Controller
        name="profileImage"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            margin="normal"
            variant="standard"
            fullWidth
            label="Profile Image"
            autoFocus
            type="file"
          />
        )}
      /> */}
    </>
  );
};
