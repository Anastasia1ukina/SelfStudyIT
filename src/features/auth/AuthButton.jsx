import { Button } from "@mui/material"


export const AuthButton = ({ isAuth, setIsAuth }) => {
    return <Button onClick={() => setIsAuth(!isAuth)}>
        {isAuth ? 'logout' : 'login'}
    </Button>
}