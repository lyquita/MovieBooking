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
        }}
      >
        <Box zIndex={100}>
          <Typography
            sx={{
              maxHeight: "2.4rem",
              width: "auto",
              fontSize: "2rem",
              letterSpacing: "1px",
            }}
          >
            FIMO
          </Typography>
        </Box>

        <Box zIndex={100}>
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
            zIndex: 0,
            marginTop: '-2.4rem',
            position: 'relative',
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
