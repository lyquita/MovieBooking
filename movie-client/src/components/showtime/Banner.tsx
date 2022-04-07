import { Box, Typography } from "@mui/material";

const Banner = () => {
  return (
    <Box
      sx={{
        height: "500px",
        width: "100%",
        overflow: "hidden",
        opacity: "0.8",
        backgroundImage:
          "url('https://image.tmdb.org/t/p/original/skvI4rYFrKXS73BJxWGH54Omlvv.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display:'flex',
        alignItems:'flex-end',
        justifyContent:'center'
      }}
    >
      <img src="" alt="" style={{ maxHeight: "100%" }} />
      <Typography color="white" paddingBottom={4} fontSize='24px'>Spider Man</Typography>
    </Box>
  );
};

export default Banner;
