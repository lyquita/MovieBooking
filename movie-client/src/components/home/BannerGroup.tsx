import { Box, Typography } from "@mui/material";
import Slider from "react-slick";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

interface Banner {
  poster: string;
  movieTitle: string;
  genres: string;
  duration: number;
  description: string;
  movieId: string;
}

const BannerGroup = () => {
  const [bannerList, setBannerList] = useState<Banner[]>([]);

  const handleInfo = () => {};

  useEffect(() => {
    axios
      .get("/movies/banner")
      .then((res) => setBannerList(res.data))
      .catch((err) => console.log(err));
  }, []);

  const settings = {
    fade: true,
    infinite: true,
    speed: 5000,
    autoplay: true,
    nextArrow: <></>,
    prevArrow: <></>,
  };

  return (
    <>
      <Slider {...settings}>
        {bannerList.map((item) => (
          <Box
            sx={{
              backgroundImage: `url(${item.poster})`,
              height: "60vh",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            key={item.movieId}
          >
            <Box
              sx={{
                position: "absolute",
                top: "0",
                left: "0",
                background:
                  "linear-gradient(to right, rgba(0, 0, 0, 0.9) 30%, transparent 100%)",
                height: "100%",
                width: "100%",
                display: "flex",
                alignItems: "center",
                color: "white",
              }}
            >
              <Box sx={{ padding: "2rem", width: "50%" }}>
                <Typography
                  fontSize={16}
                  fontWeight={400}
                  lineHeight={2}
                  sx={{ fontSize: { lg: "32px" } }}
                >
                  {item.movieTitle}
                </Typography>
                <Typography
                  fontSize={12}
                  fontWeight={400}
                  lineHeight={2}
                  color="#cfd6e1"
                >
                  {item.description}
                </Typography>
                <Typography
                  sx={{
                    border: "1px solid rgba(255,255,255,0.13)",
                    fontSize: "0.75rem",
                    display: "inline-block",
                    lineHeight: "1.5",
                  }}
                >
                  {item.duration}min
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
                  {item.genres}
                </Typography>
              </Box>
              <Box
                sx={{
                  position: "fixed",
                  bottom: "5%",
                  left: "2%",
                  display: "flex",
                }}
              ></Box>
            </Box>
          </Box>
        ))}
      </Slider>
    </>
  );
};

export default BannerGroup;
