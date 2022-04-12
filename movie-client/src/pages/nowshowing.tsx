import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const NowShowing = () => {
  return (
    <Grid container sx={{ background: "black" }} justifyContent="center">
      <Grid item marginTop={15}>
        <Typography fontSize={48} color="white">
          Now Showing
        </Typography>
      </Grid>
      <Grid item>
        <Paper sx={{ background: "black", borderRadius: "10px", boxShadow:2 }}>
          <Link to="/movie-info" style={{ textDecoration: "none", color: "white" }}>
            <Box
              sx={{
                padding: "1.5rem",
                background:
                  "linear-gradient(to top, rgb(20, 20, 19) 50%, transparent 100%)",
              }}
            >
              <Box
                sx={{
                  backgroundImage:
                    "url('https://image.tmdb.org/t/p/w370_and_h556_bestv2/xnopI5Xtky18MPhK40cZAGAOVeV.jpg')",
                  width: "100%",
                  padding: "2rem",
                  backgroundSize: "cover",
                  opacity: "0.8",
                }}
              >
                <Typography fontSize={25}>Spider Man</Typography>
                <Typography
                  fontSize={16}
                  color="rgb(154, 199, 250)"
                  marginTop={1}
                  fontWeight={500}
                >
                  By: Hireoo
                </Typography>
                <Box sx={{ display: "flex", marginTop: "1rem" }}>
                  <Typography
                    marginRight={2}
                    border="1px solid grey"
                    padding={0.5}
                  >
                    130 min
                  </Typography>
                  <Typography
                    marginRight={2}
                    border="1px solid grey"
                    padding={0.5}
                  >
                    Fantasy
                  </Typography>
                </Box>
              </Box>
              <Box padding="1.5rem">
                <Typography fontSize={12} color="rgb(207, 214, 225)">
                  a kindhearted street urchin named aladdin embarks on a magical
                  adventure after finding a lamp that releases a wisecracking
                  genie while a power-hungry grand vizier vies for the same lamp
                  that has the power to make their deepest wishes come true.
                </Typography>
              </Box>
            </Box>
          </Link>
        </Paper>
      </Grid>
      <Grid item>
        <Paper sx={{ background: "black", borderRadius: "10px", boxShadow:2 }}>
          <Link to="/movie-info" style={{ textDecoration: "none", color: "white" }}>
            <Box
              sx={{
                padding: "1.5rem",
                background:
                  "linear-gradient(to top, rgb(20, 20, 19) 50%, transparent 100%)",
              }}
            >
              <Box
                sx={{
                  backgroundImage:
                    "url('https://image.tmdb.org/t/p/original/stemLQMLDrlpfIlZ5OjllOPT8QX.jpg')",
                  width: "100%",
                  padding: "2rem",
                  backgroundSize: "cover",
                  opacity: "0.8",
                }}
              >
                <Typography fontSize={25}>Spider Man</Typography>
                <Typography
                  fontSize={16}
                  color="rgb(154, 199, 250)"
                  marginTop={1}
                  fontWeight={500}
                >
                  By: Hireoo
                </Typography>
                <Box sx={{ display: "flex", marginTop: "1rem" }}>
                  <Typography
                    marginRight={2}
                    border="1px solid grey"
                    padding={0.5}
                  >
                    130 min
                  </Typography>
                  <Typography
                    marginRight={2}
                    border="1px solid grey"
                    padding={0.5}
                  >
                    Fantasy
                  </Typography>
                </Box>
              </Box>
              <Box padding="1.5rem">
                <Typography fontSize={12} color="rgb(207, 214, 225)">
                  a kindhearted street urchin named aladdin embarks on a magical
                  adventure after finding a lamp that releases a wisecracking
                  genie while a power-hungry grand vizier vies for the same lamp
                  that has the power to make their deepest wishes come true.
                </Typography>
              </Box>
            </Box>
          </Link>
        </Paper>
      </Grid>
      <Grid item>
        <Paper sx={{ background: "black", borderRadius: "10px", boxShadow:2 }}>
          <Link to="/movie-info" style={{ textDecoration: "none", color: "white" }}>
            <Box
              sx={{
                padding: "1.5rem",
                background:
                  "linear-gradient(to top, rgb(20, 20, 19) 50%, transparent 100%)",
              }}
            >
              <Box
                sx={{
                  backgroundImage:
                    "url('https://image.tmdb.org/t/p/w370_and_h556_bestv2/xnopI5Xtky18MPhK40cZAGAOVeV.jpg')",
                  width: "100%",
                  padding: "2rem",
                  backgroundSize: "cover",
                  opacity: "0.8",
                }}
              >
                <Typography fontSize={25}>Spider Man</Typography>
                <Typography
                  fontSize={16}
                  color="rgb(154, 199, 250)"
                  marginTop={1}
                  fontWeight={500}
                >
                  By: Hireoo
                </Typography>
                <Box sx={{ display: "flex", marginTop: "1rem" }}>
                  <Typography
                    marginRight={2}
                    border="1px solid grey"
                    padding={0.5}
                  >
                    130 min
                  </Typography>
                  <Typography
                    marginRight={2}
                    border="1px solid grey"
                    padding={0.5}
                  >
                    Fantasy
                  </Typography>
                </Box>
              </Box>
              <Box padding="1.5rem">
                <Typography fontSize={12} color="rgb(207, 214, 225)">
                  a kindhearted street urchin named aladdin embarks on a magical
                  adventure after finding a lamp that releases a wisecracking
                  genie while a power-hungry grand vizier vies for the same lamp
                  that has the power to make their deepest wishes come true.
                </Typography>
              </Box>
            </Box>
          </Link>
        </Paper>
      </Grid>
      <Grid item>
        <Paper sx={{ background: "black", borderRadius: "10px", boxShadow:2 }}>
          <Link to="/movie-info" style={{ textDecoration: "none", color: "white" }}>
            <Box
              sx={{
                padding: "1.5rem",
                background:
                  "linear-gradient(to top, rgb(20, 20, 19) 50%, transparent 100%)",
              }}
            >
              <Box
                sx={{
                  backgroundImage:
                    "url('https://image.tmdb.org/t/p/original/stemLQMLDrlpfIlZ5OjllOPT8QX.jpg')",
                  width: "100%",
                  padding: "2rem",
                  backgroundSize: "cover",
                  opacity: "0.8",
                }}
              >
                <Typography fontSize={25}>Spider Man</Typography>
                <Typography
                  fontSize={16}
                  color="rgb(154, 199, 250)"
                  marginTop={1}
                  fontWeight={500}
                >
                  By: Hireoo
                </Typography>
                <Box sx={{ display: "flex", marginTop: "1rem" }}>
                  <Typography
                    marginRight={2}
                    border="1px solid grey"
                    padding={0.5}
                  >
                    130 min
                  </Typography>
                  <Typography
                    marginRight={2}
                    border="1px solid grey"
                    padding={0.5}
                  >
                    Fantasy
                  </Typography>
                </Box>
              </Box>
              <Box padding="1.5rem">
                <Typography fontSize={12} color="rgb(207, 214, 225)">
                  a kindhearted street urchin named aladdin embarks on a magical
                  adventure after finding a lamp that releases a wisecracking
                  genie while a power-hungry grand vizier vies for the same lamp
                  that has the power to make their deepest wishes come true.
                </Typography>
              </Box>
            </Box>
          </Link>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default NowShowing;
