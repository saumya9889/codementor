import React from 'react';
import Box from '@mui/material/Box';
import { Typography, Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: 'Raleway, sans-serif',
    },
});

const Banner = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box
                className="banner-wrapper"
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 500,
                    background: '#005672',
                    color: '#FFF',
                    padding: '0 20px',
                }}
            >
                <Box sx={{ textAlign: 'center' }}>

                    <Typography
                        variant="h1"
                        sx={{
                            fontSize: '36px',
                            fontWeight: '700',
                            mb: 2,
                            display: 'flex',
                        }}
                    >
                        <span className='image'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="24" viewBox="0 0 24 24"
                                style={{ flexShrink: 0, marginRight: '10px' }}
                            >
                                <path fill="#000" fill-rule="nonzero" d="M11.97 2l9.53 3.253-1.496 12.328L11.98 22l-7.984-4.36L2.5 5.312 11.97 2zM9.45 13.747l2.503-.034 2.745-.013 1.285 2.95 2.089.046-6.103-12.93.011-.023H12v-.044l-.02.044h-.022l-.01-.021v.02h.01l.011.025-5.85 12.875 2.17-.009 1.161-2.886zM10.22 12l1.743-4.11L13.941 12h-3.72z" />
                            </svg>
                        </span>
                        Get Angular Expert Help in
                        <span style={{ margin: '0 10px', textDecoration: 'underline' }}> 6 Minutes </span>
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: '17px',
                            color: '#ffffff',
                            fontFamily: 'Open Sans, sans-serif',
                            lineheight: '1.5',
                            //   fontWeight: '700',
                            mb: 2,
                        }}
                    >
                        At Codementor, you’ll find top Angular experts, developers, consultants, and tutors.
                        Get your project built, <br /> code reviewed, or problems solved by vetted Angular freelancers.
                        Learn from expert mentors with team <br /> training & coaching experiences.
                        Whatever the case may be, find the Angular help you need in no time.
                    </Typography>
                    <Button variant="contained"
                        sx={{
                            '&:hover': {
                            backgroundColor: 'rgb(255, 107, 84)',},
                            background: "rgb(255, 107, 84)",
                            border: "rgb(255, 107, 84)",
                            borderradius: "4px",
                            outline: "none",
                            padding: "15px 31px",
                            opacity: 1,
                            marginTop:"2rem"
                        }}
                    >
                        <span style={{
                            color: '#ffffff', cursor: 'pointer', texttransform: 'uppercase',
                            fontfamily: "Open Sans",
                            fontweight: 700,
                            fontsize: '16px',
                            lineheight: 'normal',
                            textalign: 'center',
                            transition: "background-color 0.1s ease-in-out 0s, border-color 0.1s ease-in-out 0s",
                        }}
                        > Get Help Now </span>
                    </Button>
                </Box>
            </Box>
      </ThemeProvider>
    );
};

export default Banner;

