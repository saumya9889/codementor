import Logo from "../assests/logo.png";
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
// import IconButton from '@mui/material/IconButton';
import Typography from "@mui/material/Typography";
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
import Container from "@mui/material/Container";
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
import Tooltip from "@mui/material/Tooltip";
import { Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import IconButton from '@mui/material/IconButton'; 
import MenuIcon from '@mui/icons-material/Menu';

const theme = createTheme({
  typography: {
    fontFamily: "Raleway, sans-serif",
  },
});

const HeaderComponent = () => {
  const [menuShow, setMenuShow] = useState(false)
 
  const handleOpenNavMenu = () => {
    setMenuShow(!menuShow);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <AppBar
          position="static"
          className="main-wrapper"
          sx={{
            backgroundColor: "#005672",
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
                  display: { xs: "block", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                <img
                  src={Logo}
                  alt="Logo"
                  className="img-wrap"
                  sx={{
                    //width: 50, // Adjust the width as needed
                    height: "auto", // Automatically adjust the height based on the width
                    marginRight: "8px", // Add margin between the image and text
                    borderRadius: "50%",
                  }}
                />
              </Typography>

              <Box className="hamburge-item" sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                <Typography
                  sx={{ margin: "0 16px", textAlign: "center" }}
                  spacing={2}
                >
                  Find Mentors
                </Typography>
                <Typography
                  sx={{ margin: "0 16px", textAlign: "center" }}
                  spacing={2}
                >
                  Find Freelancers
                </Typography>
                <Typography
                  sx={{ margin: "0 16px", textAlign: "center" }}
                  spacing={2}
                >
                  How it works
                </Typography>
                <Typography
                  sx={{ margin: "0 16px", textAlign: "center" }}
                  spacing={2}
                >
                  Events
                </Typography>
              </Box>

              <Box
                sx={{ flexGrow: 0, display: { xs: "none" ,md:"block"} }}
                className="login-btn-wrap"
              >
                <Button
                  sx={{
                    fontFamily: "monospace",
                    fontWeight: 700,
                    fontSize: 15,
                    color: "white",
                  }}
                >
                  signup
                </Button>
                <Button
                  sx={{
                    fontFamily: "monospace",
                    fontWeight: 700,
                    color: "white",
                    fontSize: 15,
                  }}
                >
                  Login
                </Button>
              </Box>

              <Box sx={{ flexGrow: 1,justifyContent:"flex-end", display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton> 
              </Box>
              {/* mobile---menu--start--here */}
              {menuShow ?
                <Box className="hamburge-item" sx={{ flexGrow: 1, display: {  md: "none" } }}>
                <Typography
                  sx={{ margin: "0 16px", textAlign: "center" }}
                  spacing={2}
                >
                  Find Mentors
                </Typography>
                <Typography
                  sx={{ margin: "0 16px", textAlign: "center" }}
                  spacing={2}
                >
                  Find Freelancers
                </Typography>
                <Typography
                  sx={{ margin: "0 16px", textAlign: "center" }}
                  spacing={2}
                >
                  How it works
                </Typography>
                <Typography
                  sx={{ margin: "0 16px", textAlign: "center" }}
                  spacing={2}
                >
                  Events
                </Typography>
              </Box> : ""
              }
              {/* mobile---menu--end--here */}
            </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>
    </>
  );
};

export default HeaderComponent;
