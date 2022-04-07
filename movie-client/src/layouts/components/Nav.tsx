import {
  Box,
  Container,
  IconButton,
  List,
  ListItem,
  Slide,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";

const Nav = () => {
  const [open, setOpen] = useState("none");
  const [checked, setChecked] = useState(false);

  const openMenu = () => {
    if (open === "none") {
      setOpen("flex");
    } else {
      setOpen("none");
    }
    setChecked((prev) => !prev);
  };

  return (
    <Container sx={{ position: "absolute", zIndex: "1", padding:'0' }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          color: "white",
          padding:'2rem 0'
        }}
      >
        <Box zIndex={100}>
          <Typography
            sx={{
              maxHeight: "2.4rem",
              width: "auto",
              fontSize: "2rem",
              letterSpacing: "1px",
              margin: '0 2rem'
            }}
          >
            FIMO
          </Typography>
        </Box>

        <Box zIndex={100} sx={{margin: '0 2rem'}} >
          <IconButton>
            <PersonIcon sx={{ color: "white" }} />
          </IconButton>
          <IconButton onClick={openMenu}>
            <MenuIcon sx={{ color: "white" }} />
          </IconButton>
        </Box>
      </Box>
        <Box
          sx={{
            background: "black",
            color: "white",
            height: "100vh",
            width: "100vw",
            display: open,
            flexDirection: "column",
            justifyContent: "center",
            zIndex: -1,
            marginTop: '-104px',
            position: 'fixed',
            letterSpacing: '3px'
          }}
        >
          <Slide in={checked} direction="down" timeout={500}>
          <List
        >
          <ListItem sx={{ justifyContent: "center", fontSize: "32px" }}>
            Home
          </ListItem>
          <ListItem sx={{ justifyContent: "center", fontSize: "32px" }}>
            Movies
          </ListItem>
          <ListItem sx={{ justifyContent: "center", fontSize: "32px" }}>
            Cinemas
          </ListItem>
        </List>
          </Slide>
         
        </Box>
    </Container>
  );
};

export default Nav;
