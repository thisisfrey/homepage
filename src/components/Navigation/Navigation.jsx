import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";
import { useNavigate } from "react-router-dom";
import DownloadButton from "../DownloadButton/DownloadButton";
import "./Navigation.css";
import { contacts, urls, cv } from "../../data/data";
//import Logo from "../../assets/logo.png";

const pages = [];

function Navigation() {
  const navigate = useNavigate();

  // Navigate to the selected page
  const navigateToPage = (route) => {
    navigate(route);
  };

  return (
    <AppBar
      position="static"
      sx={{
        height: { xs: "8vh", md: "10vh" },
        display: "flex",
        justifyContent: "center",
        backgroundColor: "transparent",
        boxShadow: "none",
        zIndex: 1,
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100%",
          width: "100%",
        }}
      >
        {/*  <img
          src={Logo}
          alt="Logo"
          style={{
            height: "35px",
            marginRight: "20px",
          }}
        /> */}

        <Typography
          variant="h3"
          className="nav-title"
          sx={{
            mr: 2,
            fontSize: { xs: "23px", md: "35px" },
            fontWeight: 500,
            color: "primary.main",
          }}
        >
          Antonia Alice Frey
        </Typography>
        

        <Box sx={{ flexGrow: 1, display: "flex" }}>
          {pages.map((page) => (
            <Button
              key={page}
              onClick={() => navigateToPage(page.route)}
              sx={{
                my: 2,
                mx: 1,
                color: "white",
                display: "block",
                borderRadius: 0,
                textTransform: "none",
                borderBottom: "1px solid transparent",
                "&:hover": {
                  borderBottom: "1px solid #fff",
                },
              }}
            >
              {page.label}
            </Button>
          ))}
        </Box>
        <Box
          sx={{
            flexGrow: 0,
            mr: { md: "5rem" },
            display: { xs: "none", md: "flex" },
          }}
        >
          <DownloadButton
            label="Download CV"
            pathToFile={cv.path}
            downloadFileName={cv.filename}
            color="primary.main"
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
export default Navigation;
