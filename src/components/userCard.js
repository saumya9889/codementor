import React from "react";
import { Button, Typography, CardContent, Card, Box } from "@mui/material";

const UserCard = (props) => {
    console.log(props,"props")
  return (
    <>
      <Card sx={{}} className="main-card-wrapper">
        <CardContent
          className="card"
          sx={{
            display: "flex",
            justifyContent: "center", 
            display: "flex",
            flexdirection: "column",
            flexflow: "wrap",
            background: "#fff",
          }}
        >
          <Box
            className="left-content"
            sx={{
              textAlign: "center",
              background: "#fff",
              borderradius:"50%"
            }}
          >
            <img
            style={{borderRadius:"50%",maxWidth:"90%",maxHeight:"100%"}}
            sx={{ 
              borderRadius:"50%"
            }}
              alt="RajhaRajesuwari S, Angular programmer and expert" 
              src="https://process.filestackapi.com/cache=expiry:max/resize=width:240/WUOcmoSQaCSSN4DOpX7A"
            />
            <Button
              variant="contained"
              sx={{
                "&:hover": {
                  backgroundColor: "rgb(0, 159, 198)",
                },
                background: "rgb(0, 159, 198)",
                border: "rgb(0, 159, 198)",
                borderradius: "4px",
                outline: "none",
                padding: "15px 31px",
                opacity: 1,
                marginTop: "2rem",
                width: "180px",
                height: "50px",
                fontsize: "12px",
              }}
            >
              <span
                style={{
                  color: "#ffffff",
                  cursor: "pointer",
                  texttransform: "uppercase",
                  fontfamily: "Open Sans",
                  fontweight: 700,
                  fontsize: "14px",
                  lineheight: "1.43",
                  textalign: "center",
                  transition:
                    "background-color 0.1s ease-in-out 0s, border-color 0.1s ease-in-out 0s",
                }}
              >
                {" "}
                Get Help Now{" "}
              </span>
            </Button>
          </Box>

          <Box>
            <Typography
              variant="h3"
              sx={{
                marginRight: "20px",
                fontSize: "1.25rem",
                color: "rgb(0, 54, 72)",
                fontWeight: "bold",
              }}
              gutterBottom
            >
              {props.name}
            </Typography>

            <Typography
              variant="h4"
              sx={{
                marginBottom: "4px",
                fontWeight: "bold",
                fontSize: "14px",
                color: "rgb(51, 51, 51)",
              }}
            >
             {props.title}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              I am an experienced full stack developer 15 years in the field
              with consistent knowledge in developing web portals with expertise
              in all opensource of PHP like Wordpress , Opencart....
            </Typography>
            <Box
              sx={{
                display: "flex",
                padding: "3px 8px",
                flexWrap: "nowrap",
              }}
            >
              <Button
                variant="outlined"
                href="#"
                sx={{
                  marginBottom: "8px",
                  marginRight: "8px",
                  background: "rgb(241, 241, 241)",
                  borderRadius: "3px",
                  color: "rgb(153, 153, 153)",
                  fontSize: "12px",
                }}
              >
                {props.button_angular}
              </Button>
              <Button
                variant="outlined"
                href="#"
                sx={{
                  marginBottom: "8px",
                  marginRight: "8px",
                  background: "rgb(241, 241, 241)",
                  borderRadius: "3px",
                  color: "rgb(153, 153, 153)",
                  fontSize: "12px",
                }}
              >
                Wordpress
              </Button>

              <Button
                variant="outlined"
                href="#"
                sx={{
                  marginBottom: "8px",
                  marginRight: "8px",
                  background: "rgb(241, 241, 241)",
                  borderRadius: "3px",
                  color: "rgb(153, 153, 153)",
                  fontSize: "12px",
                }}
              >
                SHOPIFY
              </Button>

              <Button
                variant="outlined"
                href="#"
                sx={{
                  marginBottom: "8px",
                  marginRight: "8px",
                  background: "rgb(241, 241, 241)",
                  borderRadius: "3px",
                  color: "rgb(153, 153, 153)",
                  fontSize: "12px",
                }}
              >
                Node
              </Button>

              <Button
                variant="outlined"
                href="#"
                sx={{
                  marginBottom: "8px",
                  marginRight: "8px",
                  background: "rgb(241, 241, 241)",
                  borderRadius: "3px",
                  color: "rgb(153, 153, 153)",
                  fontSize: "12px",
                }}
              >
                React
              </Button>
            </Box>
          </Box>
        </CardContent>
      </Card>
      {/* second */} 
    </>
  );
};
export default UserCard;
