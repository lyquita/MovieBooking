import { Box, capitalize, Typography } from "@mui/material";
import React, { Fragment } from "react";
import Slider from "react-slick";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Link } from "react-router-dom";

const BannerGroup = () => {
  const seetings = {
    fade: true,
    infinite: true,
    speed: 5000,
    autoplay: true,
  };

  return (
    <Fragment>
      <Slider {...seetings}>
        <Box>
          <img
            src="https://poster.gsc.com.my/2022/220310_TheContractor_big.jpg"
            alt=""
            style={{ position: "relative" }}
          />
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
            <Box sx={{ padding: "2rem" }}>
              <Typography fontSize={16} fontWeight={400} lineHeight={2}>
              Morbius
              </Typography>
              <Typography
                fontSize={12}
                fontWeight={400}
                lineHeight={2}
                color="#cfd6e1"
              >
               In his attempt to cure his own blood disorder, a biochemist inadvertently turns himself into a pseudo-vampire with superhuman abilities.
              </Typography>
              <Typography
                sx={{
                  border: "1px solid rgba(255,255,255,0.13)",
                  fontSize: "0.75rem",
                  display: "inline-block",
                  lineHeight: "1.5",
                }}
              >
                128min
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
            <Box sx={{position:'fixed', bottom: '5%', left:'2%', display:'flex'}}>
              <Link to='/movie-info' style={{'textDecoration':'none', color:'white'}}>
              <Typography sx={{marginRight:'1rem'}}>INFO</Typography>
              </Link>
                <ArrowRightAltIcon />
            </Box>
          </Box>
        </Box>
        <Box>
          <img
            src="https://poster.gsc.com.my/2021/211030_Spider-manNoWayHome_big.jpg"
            alt=""
            style={{ position: "relative" }}
          />
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
            <Box sx={{ padding: "2rem" }}>
              <Typography fontSize={16} fontWeight={400} lineHeight={2}>
              The Batman
              </Typography>
              <Typography
                fontSize={12}
                fontWeight={400}
                lineHeight={2}
                color="#cfd6e1"
              >
              Robert Pattinson stars as the titular Caped Crusader in this big screen adaptation directed by Matt Reeves, which focuses on a younger Batman.
              </Typography>
              <Typography
                sx={{
                  border: "1px solid rgba(255,255,255,0.13)",
                  fontSize: "0.75rem",
                  display: "inline-block",
                  lineHeight: "1.5",
                }}
              >
                128min
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
            <Box sx={{position:'fixed', bottom: '5%', left:'2%', display:'flex'}}>
            <Link to='/movie-info' style={{'textDecoration':'none', color:'white'}}>
              <Typography sx={{marginRight:'1rem'}}>INFO</Typography>
              </Link>
                <ArrowRightAltIcon />
            </Box>
          </Box>
        </Box>
        <Box>
          <img
            src="https://poster.gsc.com.my/2022/220317_FantasticBeastsTheSecretsOfDumbledore_big.jpg"
            alt=""
            style={{ position: "relative" }}
          />
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
            <Box sx={{ padding: "2rem" }}>
              <Typography fontSize={16} fontWeight={400} lineHeight={2}>
                The Contractor
              </Typography>
              <Typography
                fontSize={12}
                fontWeight={400}
                lineHeight={2}
                color="#cfd6e1"
              >
                when john rambo's niece travels to mexico to find the father
                that abandoned her and her mother, she finds herself in the
                grasps of calle mexican sex traffickers. when she doesn't return
                home as expected, john learns she's crossed into mexico and sets
                out to get her back and make them pay.
              </Typography>
              <Typography
                sx={{
                  border: "1px solid rgba(255,255,255,0.13)",
                  fontSize: "0.75rem",
                  display: "inline-block",
                  lineHeight: "1.5",
                }}
              >
                128min
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
            <Box sx={{position:'fixed', bottom: '5%', left:'2%', display:'flex'}}>
            <Link to='/movie-info' style={{'textDecoration':'none', color:'white'}}>
              <Typography sx={{marginRight:'1rem'}}>INFO</Typography>
              </Link>
                <ArrowRightAltIcon />
            </Box>
          </Box>
        </Box>
      </Slider>
    </Fragment>
  );
};

export default BannerGroup;
