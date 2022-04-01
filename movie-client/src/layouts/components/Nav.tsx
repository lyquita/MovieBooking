import {
  Box,
  Container,
  IconButton,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";

const Nav = () => {
    const [open, setOpen] = useState('none')

const openMenu = () => {
    if(open === 'none'){
        setOpen('initial')
    }else{
        setOpen('none')
    }
}

  return (
    <Container sx={{position:'absolute', zIndex:'1'}}>
      <Box
        sx={{
          padding: "1.25rem 20px",
          display: "flex",
          justifyContent: "space-between",
          color: "white",
        }}
      >
        <Box>
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

        <Box>
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
          height: "100%",
          width: "100%",
          position: "fixed",
          top: "0px",
          left: "0px",
          zIndex: "-1",
          display: open
        }}
      >
        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            width: "100%",
            justifyContent: "center",
          }}
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
      </Box>
    </Container>
  );
};

export default Nav;
