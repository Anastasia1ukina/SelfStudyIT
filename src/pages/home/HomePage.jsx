import * as React from "react";
import {
  Avatar,
  Button,
  Stack,
  Popover,
  Typography,
  List,
  ListItem,
  Divider,
  Box,
} from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';

import { useContext } from "react";
import { AuthContext } from "../../features/auth/AuthContext";
import profileImage from "../../assets/fiona.jpg";

export const HomePage = () => {
  const { authValue, setAuthValue } = useContext(AuthContext);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const resetAuth = () => {
    setAuthValue(null);
  };

  const userEmail = authValue.email;

  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={1}
        sx={{ p: 6 }}
      >
        <p>logo</p>
        <Avatar
          onClick={handleClick}
          alt="profile"
          src={profileImage}
          sx={{ cursor: "pointer", width: 56, height: 56 }}
        ></Avatar>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
        >
          <List>
            <ListItem sx={{display: "block"}}>
              <Stack direction="row" spacing={1} alignItems="center">
                <Avatar
                  alt="profile"
                  src={profileImage}
                  sx={{ cursor: "pointer", width: 40, height: 40 }}
                ></Avatar>
                <Box>
                  <Typography variant="h6">Anna Hello</Typography>
                  <Typography>{userEmail}</Typography>
                </Box>
              </Stack>
              <Stack direction="row" spacing={1}>
                <Button variant="outlined" size="small">Profile</Button>
                <Button variant="outlined" size="small" endIcon={<LogoutIcon />}>Log Out</Button>
              </Stack>
            </ListItem>
            <Divider></Divider>
            <ListItem>Dashboard</ListItem>
            <ListItem>About</ListItem>
          </List>
        </Popover>
      </Stack>
      <h1>Домашняя страница</h1>
      <p>Вы вошли в систему как: {userEmail}</p>
      <Button
        onClick={resetAuth}
        type="submit"
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        Logout
      </Button>
    </>
  );
};
