import Button from "@mui/material/Button";


export const AuthButton = ({ isAuth, setIsAuth }) => {
    return <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} onClick={() => setIsAuth(!isAuth)}>
        {isAuth ? 'Sign Out' : 'Sign In'}
    </Button>
}