import { Box } from "@mui/material";
import React, { Fragment } from "react";
import BannerGroup from "../components/home/BannerGroup";
import ComingSoonCarousel from "../components/home/ComingSoonCarousel";
import NowshowingCarousel from "../components/home/NowshowingCarousel";

const Home = () => {
  return <Box sx={{backgroundColor:'rgb(26 26 26)'}}>
    <BannerGroup />
    <NowshowingCarousel />
    <ComingSoonCarousel />
  </Box>;
};

export default Home;
