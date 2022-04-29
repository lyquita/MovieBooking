import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { Box, Typography, useMediaQuery } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import Slider from "react-slick";

interface Nowshowing {
  id: number;
  thumbnail: string;
  movieTitle: string;
  movieId: string;
}

const NowshowingCarousel = () => {
  const smallMatches = useMediaQuery("(min-width:375px)");
  const middleMatches = useMediaQuery("(min-width:800px)");
  const largeMatches = useMediaQuery("(min-width:1200px)");
  const [nowshowing, setNowshowing] = useState<Nowshowing[]>([]);

  useEffect(() => {
    axios
      .get("/movies/nowshowing")
      .then((res) => {
        setNowshowing(res.data);

        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  function slidesToShow() {
    if (smallMatches) {
      if (middleMatches) {
        if (largeMatches) {
          return 4;
        } else return 4;
      } else return 2;
    } else return 1;
  }

  //@ts-ignore
  function PrevArrow(props) {
    const { onClick } = props;
    return (
      <Box
        sx={{
          color: "white",
          position: "absolute",
          height: "302px",
          width: "3rem",
          left: "0",
          zIndex: "1",
          display: "flex",
          alignItems: "center",
          marginTop: "-1px",
          background:
            "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,37,0) 100%)",
        }}
      >
        <ArrowBackIos onClick={onClick} />
      </Box>
    );
  }

  //@ts-ignore
  function NextArrow(props) {
    const { onClick } = props;
    return (
      <Box
        sx={{
          color: "white",
          position: "absolute",
          height: "302px",
          width: "3rem",
          right: "0",
          zIndex: "1",
          display: "flex",
          alignItems: "center",
          marginTop: "-1px",
          background:
            "linear-gradient(-90deg, rgba(0,0,0,1) 0%, rgba(0,0,37,0) 100%)",
          top: "0",
        }}
      >
        <ArrowForwardIos onClick={onClick} />
      </Box>
    );
  }

  const settings = {
    speed: 500,
    centerPadding: "50px",
    slidesToShow: slidesToShow(),
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    centerMode: smallMatches ? false : true,
    className: smallMatches ? "" : "carousel-center",
  };

  return (
    <Box sx={{ padding: "48px 0" }}>
      <Box sx={{ color: "white", display: "flex" }}>
        <Typography
          fontSize={32}
          fontWeight={300}
          lineHeight={1.5}
          padding="2rem"
        >
          Now Showing
        </Typography>
        <Typography
          fontSize={11}
          sx={{ display: "flex", alignItems: "center" }}
          color="#03a9f4"
        >
          Explore All
        </Typography>
      </Box>
      <Box>
        <Slider {...settings}>
          {nowshowing.map((item) => (
            <Box
              key={item.id}
              sx={{
                padding: "0 1rem",
                ":hover": { backgroundColor: "#282828" },
              }}
            >
              <Box
                sx={{
                  width: "auto",
                  height: "300px",
                  backgroundImage: `url(${item.thumbnail})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              ></Box>
              <Typography color="white" padding="1rem 0" textAlign="center">
                {item.movieTitle}
              </Typography>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default NowshowingCarousel;
