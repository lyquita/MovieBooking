import { ArrowBackIosNewOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{display:'flex'}}>
      <Box
        sx={{
          backgroundImage: "url(https://source.unsplash.com/featured/?cinema)",
          width: "50%",
          height: "100vh",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></Box>
      <Box
        sx={{
          background: "black",
          color: "white",
          position: { xs: "fixed", lg: "initial" },
          width: "100%",
          zIndex: "1",
          padding: "2rem",
          height: "100vh",
        }}
      >
        <IconButton onClick={() => navigate(-1)}>
          <ArrowBackIosNewOutlined
            sx={{ width: "25px", height: "25px", color: "white" }}
          />
        </IconButton>

        <Box sx={{ padding: { sm: "0 10rem" } }}>
          <Typography fontSize={48} fontWeight={300} marginTop="5rem">
            Sign in
          </Typography>
          <Stack marginTop={2} spacing={2}>
            <Button
              variant="contained"
              fullWidth
              sx={{
                color: "rgb(222, 82, 70)",
                background: "white",
                height: "56px",
              }}
            >
              Google
            </Button>
            <Button
              variant="contained"
              fullWidth
              sx={{ background: "#4c69ba", height: "56px" }}
            >
              Facebook
            </Button>
          </Stack>
          <Stack marginTop={4} spacing={2}>
            <TextField
              label="username"
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "gray" },
                },
                input: { color: "white" },
                label: { color: "rgba(255, 255, 255, 0.7)" },
                "& p": { color: "rgba(255, 255, 255, 0.7)" },
                width: "100%",
              }}
            />
            <TextField
              label="password"
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "gray" },
                },
                input: { color: "white" },
                label: { color: "rgba(255, 255, 255, 0.7)" },
                "& p": { color: "rgba(255, 255, 255, 0.7)" },
                width: "100%",
              }}
            />
            <Button
              variant="contained"
              fullWidth
              sx={{ backgroundColor: "#03a9f4" }}
            >
              Login now
            </Button>
            <Typography fontSize={12}>
              Don't have an account?
              <Link
                to="/signup"
                style={{
                  color: "rgb(3, 169, 244)",
                  textDecoration: "none",
                  fontWeight: "800",
                }}
              >
                register
              </Link>
            </Typography>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
