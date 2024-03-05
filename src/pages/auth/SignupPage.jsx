// import { Link } from 'react-router-dom';
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
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
import { PasswordField } from './PasswordField';
import { Button } from '@mui/material';

const defaultTheme = createTheme();

export const SignupPage = () => {

    const { control, handleSubmit } = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmedPassword: "",
        },
    });


    const onSubmit = (data) => {
        console.log("React hook form data", data);
    };

    return (
        <>
            <ThemeProvider theme={defaultTheme}>
                <Grid container component="main" sx={{ height: "100vh" }}>
                    <CssBaseline />
                    <Grid
                        item
                        xs={false}
                        sm={false}
                        md={6}
                        sx={{
                            backgroundImage:
                                "url(https://source.unsplash.com/random?wallpapers)",
                            backgroundRepeat: "no-repeat",
                            backgroundColor: (t) =>
                                t.palette.mode === "light"
                                    ? t.palette.grey[50]
                                    : t.palette.grey[900],
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    />
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
                                my: 8,
                                mx: 16,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}
                        >
                            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                            </Avatar>
                            <Typography component="h1">Sign up</Typography>
                            <Box
                                component="form"
                                noValidate
                                onSubmit={handleSubmit(onSubmit)}
                                sx={{ mt: 1 }}
                            >
                                <Controller
                                    name="firstName"
                                    control={control}
                                    rules={{
                                        required: true,
                                        minLength: 2
                                    }}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            margin="normal"
                                            variant="standard"
                                            fullWidth
                                            label="First name"
                                            autoComplete="first name"
                                            autoFocus
                                        />
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
                                        <PasswordField field={field} label="Password" />
                                    )}
                                />
                                <Controller
                                    name="confirmedPassword"
                                    control={control}
                                    render={({ field }) => (
                                        <PasswordField field={field} label="Confirmed Password" />
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
                                >Sign Up</Button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </>
    );
};



// export const SignupPage = () => {
//     const [isAuth, setIsAuth] = useAuth();
//     return (
//         <>
//             <h1> Hello Signup Page!</h1>
//             <Link href="/login">Login</Link>
//             <AuthButton isAuth={isAuth} setIsAuth={setIsAuth} />
//         </>
//     );
// }