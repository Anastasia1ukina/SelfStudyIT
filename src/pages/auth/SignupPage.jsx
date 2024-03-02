import { Link } from 'react-router-dom';
import { AuthButton } from '../../features/auth/AuthButton';
import { useAuth } from '../../features/auth/useAuth';

// const defaultTheme = createTheme();

// export const SignupPage = () => {
//     const [isAuth, setIsAuth] = useAuth();
//     const [showPassword, setShowPassword] = React.useState(false);

//     const handleClickShowPassword = () => setShowPassword((show) => !show);

//     const { control, handleSubmit } = useForm({
//         defaultValues: {
//             email: "",
//             password: "",
//         },
//     });


//     const onSubmit = (data) => {
//         console.log("React hook form data", data);
//     };

//     return (
//         <>
//             <ThemeProvider theme={defaultTheme}>
//                 <Grid container component="main" sx={{ height: "100vh" }}>
//                     <CssBaseline />
//                     <Grid
//                         item
//                         xs={false}
//                         sm={false}
//                         md={6}
//                         sx={{
//                             backgroundImage:
//                                 "url(https://source.unsplash.com/random?wallpapers)",
//                             backgroundRepeat: "no-repeat",
//                             backgroundColor: (t) =>
//                                 t.palette.mode === "light"
//                                     ? t.palette.grey[50]
//                                     : t.palette.grey[900],
//                             backgroundSize: "cover",
//                             backgroundPosition: "center",
//                         }}
//                     />
//                     <Grid
//                         item
//                         xs={12}
//                         sm={12}
//                         md={6}
//                         component={Paper}
//                         elevation={0}
//                         square
//                     >
//                         <Box
//                             sx={{
//                                 my: 8,
//                                 mx: 16,
//                                 display: "flex",
//                                 flexDirection: "column",
//                                 alignItems: "center",
//                             }}
//                         >
//                             <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
//                             </Avatar>
//                             <Typography component="h1">Sign in</Typography>
//                             <Box
//                                 component="form"
//                                 noValidate
//                                 onSubmit={handleSubmit(onSubmit)}
//                                 sx={{ mt: 1 }}
//                             >
//                                 <Controller
//                                     name="email"
//                                     control={control}
//                                     render={({ field }) => (
//                                         <TextField
//                                             {...field}
//                                             margin="normal"
//                                             variant="standard"
//                                             fullWidth
//                                             label="Email Address"
//                                             autoComplete="email"
//                                             autoFocus
//                                         />
//                                     )}
//                                 />
//                                 <Controller
//                                     name="password"
//                                     control={control}
//                                     render={({ field }) => (
//                                         <TextField
//                                             {...field}
//                                             margin="normal"
//                                             fullWidth
//                                             variant="standard"
//                                             label="Password"
//                                             InputProps={{
//                                                 type: showPassword ? "text" : "password",
//                                                 endAdornment: (
//                                                     <InputAdornment position="end">
//                                                         <IconButton
//                                                             aria-label="toggle password visibility"
//                                                             onClick={handleClickShowPassword}
//                                                             // onMouseDown={handleMouseDownPassword}
//                                                             edge="end"
//                                                         >
//                                                             {showPassword ? (
//                                                                 <VisibilityOff />
//                                                             ) : (
//                                                                 <Visibility />
//                                                             )}
//                                                         </IconButton>
//                                                     </InputAdornment>
//                                                 ),
//                                             }}
//                                         />
//                                     )}
//                                 />

//                                 <FormControlLabel
//                                     control={<Checkbox value="remember" color="primary" />}
//                                     label="Remember me"
//                                 />
//                                 <Button
//                                     type="submit"
//                                     fullWidth
//                                     variant="contained"
//                                     sx={{ mt: 3, mb: 2 }}
//                                 >
//                                     Sign In
//                                 </Button>
//                                 <Grid container>
//                                     <Grid item xs>
//                                         <Link href="#" variant="body2">
//                                             Forgot password?
//                                         </Link>
//                                     </Grid>
//                                     <Grid item>
//                                         <Link href="/signup" variant="body2">
//                                             {"Don't have an account? Sign Up"}
//                                         </Link>
//                                     </Grid>
//                                 </Grid>
//                             </Box>
//                         </Box>
//                     </Grid>
//                 </Grid>
//             </ThemeProvider>
//         </>
//     );
// };


export const SignupPage = () => {
    const [isAuth, setIsAuth] = useAuth();
    return (
        <>
            <h1> Hello Signup Page!</h1>
            <Link href="/login">Login</Link>
            <AuthButton isAuth={isAuth} setIsAuth={setIsAuth} />
        </>
    );
}