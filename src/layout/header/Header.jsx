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
  IconButton,
  Link as MuiLink,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

import { useContext } from "react";
import { AuthContext } from "../../features/auth/AuthContext";
import profileImage from "../../assets/fiona.jpg";
import { Link } from "react-router-dom";
import { TypeWriterText } from "../../components/typeWriterText/TypeWriterText";
import { ProfileAvatar } from "../../pages/profile/ProfileAvatar";

export const Header = () => {
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

  const theme = createTheme({
    components: {
      MuiLink: {
        styleOverrides: {
          root: {
            textDecoration: "none",
            color: "lightpink"
          },
        },
      },
    },
  });

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      spacing={1}
      sx={{ p: 6 }}
    >
      {/* <MuiLink sx={{
        maxWidth: "200px",
        cursor: "pointer",
        textDecoration: "none",
        color: "black",
        textDecorationColor: "black"
      }}> */}
        <TypeWriterText>Self Study IT</TypeWriterText>
      {/* </MuiLink> */}
      <Typography>// FRONT</Typography>
      <Typography>streak 100 days</Typography>
      <Typography>1000 xp</Typography>
      <IconButton onClick={handleClick}>
        <ProfileAvatar width={56} height={56} />
      </IconButton>
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
        <ThemeProvider theme={theme}>
          <List>
            <ListItem sx={{ display: "block" }}>
              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                component={Link}
                to="/profile"
              >
                <ProfileAvatar width={40} height={40} />
                <Box>
                  <Typography variant="h6">Anna Hello</Typography>
                  <Typography>{userEmail}</Typography>
                </Box>
                <IconButton onClick={resetAuth} type="submit" size="small">
                  <LogoutIcon />
                </IconButton>
              </Stack>
            </ListItem>
            <Divider></Divider>
            <ListItem>
              <MuiLink href="/home">Home</MuiLink>
            </ListItem>
            <ListItem>
              <MuiLink href="/dashboard">Dashboard</MuiLink>
            </ListItem>
            <ListItem>
              <MuiLink href="#">About</MuiLink>
            </ListItem>
            <ListItem>
              <MuiLink href="#">About</MuiLink>
            </ListItem>
          </List>
        </ThemeProvider>
      </Popover>
    </Stack>
  );
};
