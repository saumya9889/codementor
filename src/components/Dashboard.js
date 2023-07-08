import React from "react";
import { Typography, Box, CardContent, Card, Button } from "@mui/material";
import UserCard from "./userCard";
import SearchCard from "./search";
import UserReview from "./userReview";

export default function Cards(props) {
  return (
    <>
      <Box className="grid-wrapper">
        <Box className="grid-content-wrap">
          <Box className="left-wrapper">
            <SearchCard />
            <Box className="min-head" sx={{ display: "flex" ,marginBottom:"1.5rem"}}>
              <h2
                style={{
                  fontSize: "14px",
                  lineheight: "1.43",
                  color: "rgb(153, 153, 153)",
                  fontWeight: " normal",
                  margin: "0px",
                }}
              >
                Get help from vetted Angular experts
              </h2>
              <a> See all technologies </a>
            </Box>
            <UserCard
              name={"RajhaRajesuwari S"}
              title={
                " Full Stack PHP / NODE/REACT/ WORDPRESS/SHOPIFY web developer"
              }
              button_angular="angular"
            />
            <UserCard
              name={"John user "}
              title={" FrontEnd /REACT/ WORDPRESS/SHOPIFY web developer"}
              button_angular="angular"
            />
            {/*bottom-get--start--here */}
            <Card
              sx={{ textAlign: "center" }}
              className="main-card-wrapper main-bottom-card-wrapper"
            >
              <CardContent
                className="card"
                sx={{
                  display: "block",
                  background: "#fff",
                }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    marginBottom: "1rem",
                    fontSize: "24px",
                    lineHeight: 1.5,
                    color: "rgb(51, 51, 51)",
                  }}
                >
                  View all Angular experts on Codementor
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    "&:hover": {
                      opacity: ".78",
                      background: "rgb(255, 107, 84)",
                    },
                    background: "rgb(255, 107, 84)",
                    border: "1px solid rgb(255, 107, 84)",
                    borderradius: "4px",
                    outline: "none",
                    padding: "15px 31px",
                    opacity: 1,
                    marginTop: "2rem",
                    width: "180px",
                    height: "50px",
                    fontsize: "12px",
                    display: "block",
                    margin: "1rem  auto",
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
                    SIGN UP NOW{" "}
                  </span>
                </Button>
                <a
                  href="#"
                  sx={{ display: "block" }}
                  className="codementor-anchor"
                >
                  Want to become a Angular Codementor?
                </a>
              </CardContent>
            </Card>
            {/*bottom-get--end--here */}
          </Box>
          <Box className="right-wrapper" style={{ padding: "1rem" }}>
            <Typography
              variant="h2"
              style={{
                color: "#999",
                fontSize: "16px",
                textTransform: "capitalize",
                padding: "0 0 2rem",
                textAlign: "center",
              }}
            >
              Our users love our Angular mentors
            </Typography>
            <UserReview
              userDetail="Super happy I had this session with Adnan, it helped me so much and I learned exactly what I needed to. Will book more sessions in the future!"
              userName="Jessica Jacquez"
            />
            <UserReview
              userDetail="Super happy I had this session with Adnan, it helped me so much and I learned exactly what I needed to. Will book more sessions in the future!"
              userName="demo user"
            />
            <UserReview
              userDetail="Super happy I had this session with Adnan, it helped me so much and I learned exactly what I needed to. Will book more sessions in the future!"
              userName="New Doe"
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}
