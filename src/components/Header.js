import Logo from "../assests/logo.png"
import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import { Button } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Raleway, sans-serif',
  },
});


const HeaderComponent = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <>
         <ThemeProvider theme={theme}>
            <AppBar position="static" className="main-wrapper" 
            sx={{
                backgroundColor:'#005672',
            }}
            >
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            <img src={Logo} alt="Logo" className="img-wrap" sx={{
                                //width: 50, // Adjust the width as needed
                                height: 'auto', // Automatically adjust the height based on the width
                                marginRight: '8px', // Add margin between the image and text
                                borderRadius: '50%'
                            }} />
                              
                        </Typography>


                        <Box sx={{ flexGrow: 1, display: { md: 'flex' } }}>
                            <Typography sx={{ margin: '0 16px', textAlign: 'center' }} spacing={2}>
                                Find Mentors
                            </Typography>
                            <Typography sx={{ margin: '0 16px', textAlign: 'center' }} spacing={2}>
                                Find Freelancers
                            </Typography>
                            <Typography sx={{ margin: '0 16px', textAlign: 'center' }} spacing={2}>
                                How it works
                            </Typography>
                            <Typography sx={{ margin: '0 16px', textAlign: 'center' }} spacing={2}>
                                Events
                            </Typography>
                        </Box>


                        {/* <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box> */}

                        <Box sx={{ flexGrow: 0 }} className="login-btn-wrap">
                         <Button   sx={{ 
                                fontFamily: 'monospace',
                                fontWeight: 700, 
                                fontSize: 15,
                                color: 'white', 
                            }}>signup</Button>  
                         <Button   sx={{ 
                                fontFamily: 'monospace',
                                fontWeight: 700, 
                                color: 'white', 
                                fontSize: 15,
                            }}>Login</Button> 
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            </ThemeProvider>
        </>
    )
}


export default HeaderComponent;