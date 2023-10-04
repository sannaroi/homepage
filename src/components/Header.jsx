import  AppBar  from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

function Header() {
    return (
        <AppBar position="static" style={{ backgroundColor: 'black' }}>
       
            <Toolbar>
                <Typography variant="h6">Welcome to React Router</Typography>
             
            </Toolbar>
        </AppBar>

    );
}


export default Header;