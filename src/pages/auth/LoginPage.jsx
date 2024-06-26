import * as React from "react";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useForm, Controller } from "react-hook-form";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useAuth } from "../../features/auth/useAuth";
import { Button } from "@mui/material";
import { auth, provider } from "../../firebase";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../../features/utils/useLocalStorage";
import { useContext } from "react";
import { AuthContext } from "../../features/auth/AuthContext";
import { GoogleButton } from "react-google-button";
import bgImage from "../../assets/bg-pages.jpg";
import { gsap } from "gsap";
import { deepPurple } from "@mui/material/colors";
import stylesLogin from "./loginPage.module.css";

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: deepPurple[500]
    },
  },
});

export const LoginPage = () => {
  const titleRef = React.useRef(null);
  const navigate = useNavigate();
  const { authValue, setAuthValue } = useContext(AuthContext);
  const [showPassword, setShowPassword] = React.useState(false);

  React.useEffect(() => {
    gsap.to(titleRef.current, {
      duration: 2,
      opacity: 1,
      ease: 'power2.inOut',
      scale: 1
    });
  }, []);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const googleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((userCredential) => {
        const { user } = GoogleAuthProvider.credentialFromResult(userCredential);

        setAuthValue({
          token: user.stsTokenManager.accessToken,
          email: user.email,
          uid: user.uid,
          name: user.displayName,
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const onSubmit = (data) => {
    console.log("React hook form data", data);
    const { email, password } = data;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        setAuthValue({
          token: user.accessToken,
          email: user.email,
          uid: user.uid,
        });
        console.log(user);
      })
      .catch((error) => {
        alert("Неверный логин или пароль");
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Grid container component="main" sx={{ height: "100vh" }}>
          <Grid
            item
            xs={false}
            sm={false}
            md={6}
            sx={{
              position: "relative",
              backgroundImage:
                `url(${bgImage})`,
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ><div className={stylesLogin.title} ref={titleRef}>
              Self Study IT 🎓
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            component={Paper}
            elevation={0}
            square
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
              <Typography component="h1">Sign in</Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit(onSubmit)}
                sx={{
                  mt: 1,
                  width: "90%",
                  maxWidth: "500px",
                }}
              >
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
                    />
                  )}
                />
                <Controller
                  name="password"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      margin="normal"
                      fullWidth
                      variant="standard"
                      label="Password"
                      InputProps={{
                        type: showPassword ? "text" : "password",
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              edge="end"
                            >
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  )}
                />

                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="/signup" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
                <Grid container style={{
                  marginTop: 30,
                  justifyContent: "center"
                }}>
                  <GoogleButton onClick={googleSignIn} type="light" />
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
};
