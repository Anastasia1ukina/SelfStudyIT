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
import { orange } from "@mui/material/colors";
import useAuth from "../../hooks/useAuth";

export const Header = () => {
  const { authValue, setAuthValue } = useContext(AuthContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { user, auth } = useAuth()

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
  const userName = user?.displayName || "Неопознанный жирафик";

  console.log(user)

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
        sx={{ p: "15px 30px" }}
      >
        <TypeWriterText>
          <Link to={"/"}>Self Study IT</Link>
        </TypeWriterText>
        <Stack
          direction="row"
          sx={{ width: "80vw" }}>
          <Stack direction="row"
            sx={{
              margin: "auto",
              width: "70%",
              justifyContent: "space-between",
              alignItems: "center"
            }}>
            <Typography
              sx={{
                fontFamily: `"DrukWide", "Arial", sans-serif`,
                letterSpacing: "0.15em",
                backgroundColor: "rgba(241, 214, 238, 0.7)",
                padding: "10px",
                borderRadius: "15px",
                cursor: "pointer"
              }}>
              // FRONT</Typography>
            <Box sx={{
              display: "flex",
              gap: "8px",
              alignItems: "center"
            }}>
              <WhatshotRoundedIcon sx={{ color: orange[500] }} />
              <Typography
                sx={{
                  textAlign: "center",
                  display: "flex",
                  fontFamily: `"DrukWide", "Arial", sans-serif`,
                  letterSpacing: "0.15em",
                }}>
                1 day
              </Typography>
            </Box>
            <Typography
              sx={{
                fontFamily: `"DrukWide", "Arial", sans-serif`,
                letterSpacing: "0.15em",
              }}
            >
              100 xp</Typography>
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
                      <Typography variant="h6">{userName}</Typography>
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
    </header >
  );
};
