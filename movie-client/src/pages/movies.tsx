import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Grid, Paper, Tab, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

interface ComingSoon {
  id: number;
  thumbnail: string;
  movieTitle: string;
  movieId: string;
  director: string;
  duration: string;
  description: string;
  genres: string;
}

interface NowShowing {
  id: number;
  thumbnail: string;
  movieTitle: string;
  movieId: string;
  director: string;
  duration: string;
  description: string;
  genres: string;
}

const Movies = () => {
  const [value, setValue] = useState("nowshowing");
  const [nowshowinglist, setNowshowinglist] = useState<NowShowing[]>([]);
  const [comingsoonlist, setComingsoonlist] = useState<ComingSoon[]>([]);
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  useEffect(() => {
    axios
      .get("/movies/nowshowing")
      .then((res) => setNowshowinglist(res.data))
      .catch((err) => console.log(err));
    axios
      .get("/movies/comingsoon")
      .then((res) => setComingsoonlist(res.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(comingsoonlist, nowshowinglist);

  return (
    <TabContext value={value}>
      <TabList
        sx={{
          paddingTop: "104px",
          background: "black",
          justifyContent: "center",
          color: "white",
          "& .MuiTabs-indicator": { display: "none" },
          "&	.MuiTabs-flexContainer": { justifyContent: "center" },
        }}
        onChange={handleChange}
      >
        <Tab
          label="Now Showing"
          value="nowshowing"
          sx={{
            color: "white",
            "&.Mui-selected": { color: "white", fontSize: "24px" },
          }}
        />
        <Tab
          label="Coming Soon"
          value="comingsoon"
          sx={{
            color: "white",
            "&.Mui-selected": { color: "white", fontSize: "24px" },
          }}
        />
      </TabList>
      <TabPanel value="nowshowing" sx={{ padding: 0 }}>
        <Grid container sx={{ background: "black" }} justifyContent="center">
          {nowshowinglist.map((item) => (
            <Grid item md={4}>
              <Paper
                sx={{
                  background: "black",
                  borderRadius: "10px",
                  boxShadow: 2,
                  height: "400px",
                }}
              >
                <Link
                  to={`/movie-info/${item.movieId}`}
                  style={{
                    textDecoration: "none",
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    height: "100%",
                  }}
                >
                  <Box
                    sx={{
                      padding: "1.5rem",
                      background:
                        "linear-gradient(to top, rgb(20, 20, 19) 50%, transparent 100%)",
                      width: { md: "90%" },
                      borderRadius: "10px",
                    }}
                  >
                    <Box
                      sx={{
                        backgroundImage: `url(${item.thumbnail})`,
                        width: { lg: "90%" },
                        padding: "2rem",
                        backgroundSize: "cover",
                        opacity: "0.8",
                        margin: "0 auto",
                      }}
                    >
                      <Typography fontSize={25}>{item.movieTitle}</Typography>
                      <Typography
                        fontSize={16}
                        color="rgb(154, 199, 250)"
                        marginTop={1}
                        fontWeight={500}
                      >
                        By: {item.director}
                      </Typography>
                      <Box sx={{ display: "flex", marginTop: "1rem" }}>
                        <Typography
                          marginRight={2}
                          border="1px solid grey"
                          padding={0.5}
                          fontSize={12}
                        >
                          {item.duration}min
                        </Typography>
                        <Typography
                          marginRight={2}
                          border="1px solid grey"
                          padding={0.5}
                          fontSize={12}
                        >
                          {item.genres}
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      padding="1.5rem"
                      sx={{ width: { lg: "90%" }, margin: "0 auto" }}
                    >
                      <Typography fontSize={12} color="rgb(207, 214, 225)">
                        {item.description}
                      </Typography>
                    </Box>
                  </Box>
                </Link>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </TabPanel>
      <TabPanel value="comingsoon" sx={{ padding: 0 }}>
        <Grid container sx={{ background: "black" }} justifyContent="center">
          {comingsoonlist.map((item) => (
            <Grid item key={item.id} md={4}>
              <Paper
                sx={{
                  background: "black",
                  borderRadius: "10px",
                  boxShadow: 2,
                  height: "400px",
                }}
              >
                <Link
                  to={`/movie-info/${item.movieId}`}
                  style={{
                    textDecoration: "none",
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    height: "100%",
                  }}
                >
                  <Box
                    sx={{
                      padding: "1.5rem",
                      background:
                        "linear-gradient(to top, rgb(20, 20, 19) 50%, transparent 100%)",
                      width: { md: "90%" },
                      borderRadius: "10px",
                    }}
                  >
                    <Box
                      sx={{
                        backgroundImage: `url(${item.thumbnail})`,
                        width: { lg: "90%" },
                        padding: "2rem",
                        backgroundSize: "cover",
                        opacity: "0.8",
                        margin: "0 auto",
                      }}
                    >
                      <Typography fontSize={25}> {item.movieTitle}</Typography>
                      <Typography
                        fontSize={16}
                        color="rgb(154, 199, 250)"
                        marginTop={1}
                        fontWeight={500}
                      >
                        By: {item.director}
                      </Typography>
                      <Box sx={{ display: "flex", marginTop: "1rem" }}>
                        <Typography
                          marginRight={2}
                          border="1px solid grey"
                          padding={0.5}
                          fontSize={12}
                        >
                          {item.duration} min
                        </Typography>
                        <Typography
                          marginRight={2}
                          border="1px solid grey"
                          padding={0.5}
                          fontSize={12}
                        >
                          {item.genres}
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      padding="1.5rem"
                      sx={{ width: { lg: "90%" }, margin: "0 auto" }}
                    >
                      <Typography fontSize={12} color="rgb(207, 214, 225)">
                        {item.description}
                      </Typography>
                    </Box>
                  </Box>
                </Link>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </TabPanel>
    </TabContext>
  );
};

export default Movies;
