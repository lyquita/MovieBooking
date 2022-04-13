import { Box, Typography } from "@mui/material";
import Slider from "react-slick";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Link } from "react-router-dom";

const BannerGroup = () => {
  const seetings = {
    fade: true,
    infinite: true,
    speed: 5000,
    autoplay: true,
  };

  return (
    <>
      <Slider {...seetings}>
        <Box
          sx={{
            backgroundImage:
              "url('https://image.tmdb.org/t/p/original/rtf4vjjLZLalpOzDUi0Qd2GTUqq.jpg')",
            height: "80vh",
            backgroundRepeat:"no-repeat",
            backgroundSize:'cover'
          }}
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
                In his attempt to cure his own blood disorder, a biochemist
                inadvertently turns himself into a pseudo-vampire with
                superhuman abilities.
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
            <Box
              sx={{
                position: "fixed",
                bottom: "5%",
                left: "2%",
                display: "flex",
              }}
            >
              <Link
                to="/movie-info"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Typography sx={{ marginRight: "1rem" }}>INFO</Typography>
              </Link>
              <ArrowRightAltIcon />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            backgroundImage:
              "url('https://image.tmdb.org/t/p/original/rtf4vjjLZLalpOzDUi0Qd2GTUqq.jpg')",
            height: "80vh",
            backgroundRepeat:"no-repeat",
            backgroundSize:'cover'
          }}
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
            <Box sx={{ padding: "2rem" }}>
              <Typography fontSize={16} fontWeight={400} lineHeight={2}>
                Whats sup!!
              </Typography>
              <Typography
                fontSize={12}
                fontWeight={400}
                lineHeight={2}
                color="#cfd6e1"
              >
                In his attempt to cure his own blood disorder, a biochemist
                inadvertently turns himself into a pseudo-vampire with
                superhuman abilities.   In his attempt to cure his own blood disorder, a biochemist
                inadvertently turns himself into a pseudo-vampire with
                superhuman abilities.   In his attempt to cure his own blood disorder, a biochemist
                inadvertently turns himself into a pseudo-vampire with
                superhuman abilities.
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
            <Box
              sx={{
                position: "fixed",
                bottom: "5%",
                left: "2%",
                display: "flex",
              }}
            >
              <Link
                to="/movie-info"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Typography sx={{ marginRight: "1rem" }}>INFO</Typography>
              </Link>
              <ArrowRightAltIcon />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            backgroundImage:
              "url('https://image.tmdb.org/t/p/w370_and_h556_bestv2/3iYQTLGoy7QnjcUYRJy4YrAgGvp.jpg')",
            height: "80vh",
            backgroundRepeat:"no-repeat",
            backgroundSize:'cover'
          }}
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
            <Box sx={{ padding: "2rem" }}>
              <Typography fontSize={16} fontWeight={400} lineHeight={2}>
                Hellow
              </Typography>
              <Typography
                fontSize={12}
                fontWeight={400}
                lineHeight={2}
                color="#cfd6e1"
              >
               Forecxdafsfgadsgasgdagdagfdasgfadfafggadsfadsfadsfasfadsfasfads
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
            <Box
              sx={{
                position: "fixed",
                bottom: "5%",
                left: "2%",
                display: "flex",
              }}
            >
              <Link
                to="/movie-info"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Typography sx={{ marginRight: "1rem" }}>INFO</Typography>
              </Link>
              <ArrowRightAltIcon />
            </Box>
          </Box>
        </Box>
      </Slider>
    </>
  );
};

export default BannerGroup;
