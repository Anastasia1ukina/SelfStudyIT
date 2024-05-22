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
import WhatshotRoundedIcon from '@mui/icons-material/WhatshotRounded';
import LogoutIcon from "@mui/icons-material/Logout";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import NewspaperRoundedIcon from '@mui/icons-material/NewspaperRounded';
import EmojiEventsRoundedIcon from '@mui/icons-material/EmojiEventsRounded';

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
            color: "black"
          },
        },
      },
    },
  });

  return (
    <header>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={1}
        sx={{ p: 5 }}
      >
        <TypeWriterText>
          <Link to={"/"}>Self Study IT</Link>
        </TypeWriterText>
        <Stack
          direction="row"
          sx={{ width: "80vw" }}>
          <Stack direction="row" sx={{ margin: "auto" }}>
            <Typography>// FRONT</Typography>
            <Typography
              sx={{
                textAlign: "center",
                display: "flex",
              }}>
              <WhatshotRoundedIcon color="action" />
              100 days
            </Typography>
            <Typography>1000 xp</Typography>
          </Stack>
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
                  <MuiLink sx={{
                    textAlign: "center",
                    display: "flex",
                    gap: "8px"
                  }} href="/home">
                    <HomeRoundedIcon color="action" />
                    Home
                  </MuiLink>
                </ListItem>
                <ListItem>
                  <MuiLink sx={{
                    textAlign: "center",
                    display: "flex",
                    gap: "8px"
                  }} href="/dashboard">
                    <NewspaperRoundedIcon color="action" />
                    Dashboard
                  </MuiLink>
                </ListItem>
                <ListItem>
                  <MuiLink sx={{
                    textAlign: "center",
                    display: "flex",
                    gap: "8px"
                  }} href="#">
                    <EmojiEventsRoundedIcon color="action" />
                    Rating
                  </MuiLink>
                </ListItem>
              </List>
            </ThemeProvider>
          </Popover>
        </Stack>
      </Stack >
    </header>
  );
};
