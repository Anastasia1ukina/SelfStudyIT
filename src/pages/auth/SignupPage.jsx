import { useNavigate } from "react-router-dom";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
// import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useForm, Controller } from "react-hook-form";
import { PasswordField } from "./PasswordField";
import { Button } from "@mui/material";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase";
import Stack from "@mui/material/Stack";
import bgImage from "../../assets/bg-signup.jpg";
import { gsap } from "gsap";
import stylesSignUp from "./signUpPage.module.css";
import { orange } from "@mui/material/colors";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { GoogleButton } from "react-google-button";

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: orange[800]
    },
  },
});

export const SignupPage = () => {
  const titleRef = React.useRef(null);
  const navigate = useNavigate();

  React.useEffect(() => {
    gsap.to(titleRef.current, {
      duration: 2,
      opacity: 1,
      ease: 'power2.inOut',
      scale: 1
    });
  }, []);

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      lastName: "",
      email: "",
      password: "",
      confirmedPassword: "",
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
        // const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  const onSubmit = async (data) => {
    console.log("React hook form data", data);
    const { username, lastName, email, password } = data;

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        return updateProfile(user, {
          displayName: `${username} ${lastName}`
        }).then(() => {
          navigate("/login");
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });

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
          >
            <div className={stylesSignUp.title} ref={titleRef}>
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
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={2}
              height={"100vh"}
            >
              <Avatar sx={{ m: 1, bgcolor: orange[800] }}></Avatar>
              <Typography component="h1">Sign up</Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit(onSubmit)}
                sx={{
                  mt: 1,
                  width: "90%",
                  maxWidth: "500px"
                }}
              >
                <Controller
                  name="username"
                  control={control}
                  rules={{
                    required: true,
                    minLength: 2,
                  }}
                  render={({ field }) => (
                    <div>
                      <TextField
                        {...field}
                        margin="normal"
                        variant="standard"
                        fullWidth
                        label="First name"
                        autoComplete="first name"
                        autoFocus
                      />
                      {errors.username &&
                        errors.username.type === "required" && (
                          <span>This field is required</span>
                        )}
                      {errors.username &&
                        errors.username.type === "minLength" && (
                          <span>
                            Username must be at least 3 characters long
                          </span>
                        )}
                    </div>
                  )}
                />
                <Controller
                  name="lastName"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      margin="normal"
                      variant="standard"
                      fullWidth
                      label="Last name"
                      autoComplete="last name"
                      autoFocus
                    />
                  )}
                />
                <Controller
                  name="email"
                  control={control}
                  rules={{ required: true, pattern: /^\S+@\S+$/i }}
                  render={({ field }) => (
                    <div>
                      <TextField
                        {...field}
                        margin="normal"
                        variant="standard"
                        fullWidth
                        label="Email Address"
                        autoComplete="email"
                        autoFocus
                      />
                      {errors.email && errors.email.type === "required" && (
                        <span>This field is required</span>
                      )}
                      {errors.email && errors.email.type === "pattern" && (
                        <span>Invalid email address</span>
                      )}
                    </div>
                  )}
                />
                <Controller
                  name="password"
                  control={control}
                  rules={{ required: true, minLength: 6 }}
                  render={({ field }) => (
                    <div>
                      <PasswordField field={field} label="Password" />
                      {errors.password &&
                        errors.password.type === "required" && (
                          <span>This field is required</span>
                        )}
                      {errors.password &&
                        errors.password.type === "minLength" && (
                          <span>
                            Password must be at least 6 characters long
                          </span>
                        )}
                    </div>
                  )}
                />
                <Controller
                  name="confirmedPassword"
                  control={control}
                  rules={{
                    required: true,
                    validate: (value) => value === watch("password"),
                  }}
                  render={({ field }) => (
                    <div>
                      <PasswordField field={field} label="Confirmed Password" />
                      {errors.confirmedPassword &&
                        errors.confirmedPassword.type === "required" && (
                          <span>This field is required</span>
                        )}
                      {errors.confirmedPassword &&
                        errors.confirmedPassword.type === "validate" && (
                          <span>Passwords do not match</span>
                        )}
                    </div>
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
                  Sign Up
                </Button>
                <Grid container style={{
                  marginTop: 10,
                  justifyContent: "center"
                }}>
                  <GoogleButton onClick={googleSignIn} type="light" />
                </Grid>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
};
