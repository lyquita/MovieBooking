import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { Fragment } from "react";
import Slider from "react-slick";

const ComingSoonCarousel = () => {
  //@ts-ignore
  function PrevArrow(props) {
    const { onClick } = props;
    return (
      <Box
        sx={{
          color: "white",
          position: "absolute",
          height: "302px",
          width:'3rem',
          left: "0",
          zIndex: "1",
          display: "flex",
          alignItems: "center",
          marginTop: '-1px',
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
          width:'3rem',
          right: "0",
          zIndex: "1",
          display: "flex",
          alignItems: "center",
          marginTop: '-1px',
          background:
            "linear-gradient(-90deg, rgba(0,0,0,1) 0%, rgba(0,0,37,0) 100%)",
          top: '0',
          
        }}
      >
        <ArrowForwardIos onClick={onClick} />
      </Box>
    );
  }

  const settings = {
    dots: true,
    speed: 500,
    centerPadding: "50px",
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    centerMode: true,
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
          Coming Soon
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
          <Box
            sx={{
              display: "flex !important",
              flexDirection: "column",
              alignItems: "center",
              ":focus": { backgroundColor: "#282828" },
            }}
          >
            <Box sx={{ width: "278px", height: "300px", background: "red" }}>
              <img
                src="https://image.tmdb.org/t/p/original/uUiId6cG32JSRI6RyBQSvQtLjz2.jpg"
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </Box>
            <Typography color="white" padding="1rem 0">
              Spider Man
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex !important",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box sx={{ width: "278px", height: "300px", background: "red" }}>
              <img
                src="https://image.tmdb.org/t/p/original/rtf4vjjLZLalpOzDUi0Qd2GTUqq.jpg"
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </Box>
            <Typography color="white" padding="1rem 0">
              Hellow
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex !important",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box sx={{ width: "278px", height: "300px", background: "red" }}>
              <img
                src="https://image.tmdb.org/t/p/original/uUiId6cG32JSRI6RyBQSvQtLjz2.jpg"
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </Box>
            <Typography color="white" padding="1rem 0">
              CC
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex !important",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box sx={{ width: "278px", height: "300px", background: "red" }}>
              <img
                src="https://image.tmdb.org/t/p/original/rtf4vjjLZLalpOzDUi0Qd2GTUqq.jpg"
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </Box>
            <Typography color="white" padding="1rem 0">
              Man
            </Typography>
          </Box>
        </Slider>
      </Box>
    </Box>
  );
};

export default ComingSoonCarousel;
