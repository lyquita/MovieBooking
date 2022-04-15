import { Box, Grid, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Cinemas = () => {
  return (
    <Grid
      container
      sx={{ background: "rgb(26, 26, 26)" }}
      justifyContent="center"
    >
      <Grid item marginTop={15} marginBottom={3}>
        <Typography fontSize={48} color="white">
          Our Cinemas
        </Typography>
      </Grid>
      <Grid
        item
        sx={{ display: "flex", justifyContent: "center", width: "100%" }}
      >
        <Paper
          sx={{
            background: "#606060",
            borderRadius: "10px",
            boxShadow: 2,
            width: { md: "60%", sm: "90%" },
            margin: { md: "2rem 10rem", sm: "2rem 5rem" },
          }}
        >
          <Link
            to="/movie-info"
            style={{ textDecoration: "none", color: "white" }}
          >
            <Box
              sx={{
                background:
                  "linear-gradient(to top, rgb(20, 20, 19) 50%, transparent 100%)",
              }}
            >
              <Box
                sx={{
                  backgroundImage:
                    "url('https://source.unsplash.com/featured/?cinema')",
                  width: "100%",
                  padding: "2rem",
                  backgroundSize: "cover",
                  opacity: "0.8",
                  height: "200px",
                }}
              ></Box>
              <Box padding="2rem">
                <Typography fontSize={18} color="rgb(207, 214, 225)">
                  Home Cinema
                </Typography>
                <Typography fontSize={12} color="rgba(255,255,255,0.7)">
                  location
                </Typography>

                <Typography
                  fontSize={12}
                  color="rgba(255,255,255,0.7)"
                  marginTop={5}
                >
                  10$ per movie
                </Typography>

                <Typography fontSize={12} color="rgba(255,255,255,0.7)">
                  100 seats availabe
                </Typography>
              </Box>
            </Box>
          </Link>
        </Paper>
      </Grid>
      <Grid
        item
        sx={{ display: "flex", justifyContent: "center", width: "100%" }}
      >
        <Paper
          sx={{
            background: "#606060",
            borderRadius: "10px",
            boxShadow: 2,
            width: { md: "60%", sm: "90%" },
            margin: { md: "2rem 10rem", sm: "2rem 5rem" },
          }}
        >
          <Link
            to="/movie-info"
            style={{ textDecoration: "none", color: "white" }}
          >
            <Box
              sx={{
                background:
                  "linear-gradient(to top, rgb(20, 20, 19) 50%, transparent 100%)",
              }}
            >
              <Box
                sx={{
                  backgroundImage:
                    "url('https://source.unsplash.com/featured/?cinema')",
                  width: "100%",
                  padding: "2rem",
                  backgroundSize: "cover",
                  opacity: "0.8",
                  height: "200px",
                }}
              ></Box>
              <Box padding="2rem">
                <Typography fontSize={18} color="rgb(207, 214, 225)">
                  Home Cinema
                </Typography>
                <Typography fontSize={12} color="rgba(255,255,255,0.7)">
                  location
                </Typography>

                <Typography
                  fontSize={12}
                  color="rgba(255,255,255,0.7)"
                  marginTop={5}
                >
                  10$ per movie
                </Typography>

                <Typography fontSize={12} color="rgba(255,255,255,0.7)">
                  100 seats availabe
                </Typography>
              </Box>
            </Box>
          </Link>
        </Paper>
      </Grid>
      <Grid
        item
        sx={{ display: "flex", justifyContent: "center", width: "100%" }}
      >
        <Paper
          sx={{
            background: "#606060",
            borderRadius: "10px",
            boxShadow: 2,
            width: { md: "60%", sm: "90%" },
            margin: { md: "2rem 10rem", sm: "2rem 5rem" },
          }}
        >
          <Link
            to="/movie-info"
            style={{ textDecoration: "none", color: "white" }}
          >
            <Box
              sx={{
                background:
                  "linear-gradient(to top, rgb(20, 20, 19) 50%, transparent 100%)",
              }}
            >
              <Box
                sx={{
                  backgroundImage:
                    "url('https://source.unsplash.com/featured/?cinema')",
                  width: "100%",
                  padding: "2rem",
                  backgroundSize: "cover",
                  opacity: "0.8",
                  height: "200px",
                }}
              ></Box>
              <Box padding="2rem">
                <Typography fontSize={18} color="rgb(207, 214, 225)">
                  Home Cinema
                </Typography>
                <Typography fontSize={12} color="rgba(255,255,255,0.7)">
                  location
                </Typography>

                <Typography
                  fontSize={12}
                  color="rgba(255,255,255,0.7)"
                  marginTop={5}
                >
                  10$ per movie
                </Typography>

                <Typography fontSize={12} color="rgba(255,255,255,0.7)">
                  100 seats availabe
                </Typography>
              </Box>
            </Box>
          </Link>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Cinemas;
