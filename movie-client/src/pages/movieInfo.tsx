import { Box, Typography } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

interface MovieDetail {
  id: string;
  description: string;
  director: string;
  duration: number;
  genres: string;
  movieTitle: string;
  poster: string;
  thumbnail: string;
}

const MovieInfo = () => {
  const [movieDetail, setMovieDetail] = useState<MovieDetail>({
    id: "",
    description: "",
    director: "",
    duration: 0,
    genres: "",
    movieTitle: "",
    poster: "",
    thumbnail: "",
  });
  const params = useParams();
  console.log({ params });
  useEffect(() => {
    axios
      .get(`/movies/detail/${params.movieId}`)
      .then((res) => setMovieDetail(res.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(movieDetail);
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
        src={movieDetail.poster}
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
            {movieDetail.movieTitle}
          </Typography>
          <Typography variant="body1">{movieDetail.description}</Typography>
        </Box>
        <Box>
          <Typography color="#9ac7fa" marginTop={2} marginBottom={2}>
            By:
            {movieDetail.director.split(",").map((item) => (
              <span>{item}</span>
            ))}
          </Typography>
          <Box sx={{ display: "flex" }}>
            <Typography
              fontSize="0.75rem"
              marginRight={2}
              border="1px solid rgba(255,255,255,0.13)"
              color="#cee4fd"
            >
              {movieDetail.duration}min
            </Typography>
            {movieDetail.genres.split(",").map((item) => (
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
                {item}
              </Typography>
            ))}
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
        <Link to="/showtime" style={{ textDecoration: "none", color: "black" }}>
          <Typography marginRight={1}>Buy Ticket</Typography>
        </Link>
        <ArrowRightAltIcon />
      </Box>
    </Box>
  );
};

export default MovieInfo;
