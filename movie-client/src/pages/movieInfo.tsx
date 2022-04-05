import { Box, Typography } from "@mui/material";
import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const MovieInfo = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        background: "black",
        position: "fixed",
        width: "100vw",
      }}
    >
      <img
        src="https://poster.gsc.com.my/2022/220310_TheContractor_big.jpg"
        alt=""
        style={{ height: "100%", position: "relative" }}
      ></img>
      <Box
        sx={{
          position: "absolute",
          top: "0",
          width: "70%",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          flexDirection: "column",
          background:
            "linear-gradient(to right, rgba(0,0,0,.9) 70%, transparent 100%)",
          padding: "0 3rem",
          color: "white",
        }}
      >
        <Box sx={{ marginBottom: "2rem" }}>⭐️⭐️⭐️⭐️⭐️</Box>
        <Box>
          <Typography variant="h5" marginBottom={2}>
            Spider Man
          </Typography>
          <Typography variant="body1">
            a kindhearted street urchin named aladdin embarks on a magical
            adventure after finding a lamp that releases a wisecracking genie
            while a power-hungry grand vizier vies for the same lamp that has
            the power to make their deepest wishes come true.
          </Typography>
        </Box>
        <Box>
          <Typography color="#9ac7fa" marginTop={2} marginBottom={2}>
            By: Hireoo
          </Typography>
          <Box sx={{ display: "flex" }}>
            <Typography
              fontSize="0.75rem"
              marginRight={2}
              border="1px solid rgba(255,255,255,0.13)"
              color="#cee4fd"
            >
              131min
            </Typography>
            <Typography
              sx={{
                border: "1px solid rgba(255,255,255,0.13)",
                fontSize: "0.75rem",
                display: "inline-block",
                lineHeight: "1.5",
                color: "#cee4fd",
                marginLeft: "1rem",
              }}
            >
              Action
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          position: "fixed",
          bottom: "0",
          zIndex: "1",
          color: "black",
          background: "white",
          width: "200px",
          height: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography marginRight={1}>Buy Ticket</Typography>
        <ArrowRightAltIcon />
      </Box>
    </Box>
  );
};

export default MovieInfo;
