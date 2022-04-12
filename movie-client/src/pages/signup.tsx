import { ArrowBackIosNewOutlined } from "@mui/icons-material";
import { Box, IconButton, Stack, Typography, TextField, Checkbox, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {

    const navigate = useNavigate()

  return (
    <Box
    sx={{
      background: "black",
      color: "white",
      position: "fixed",
      width: "100%",
      zIndex: "1",
      padding: "1rem",
      height: "100vh",
    }}
  >
      <IconButton onClick={() => navigate(-1)}>
        <ArrowBackIosNewOutlined
          sx={{ width: "25px", height: "25px", color: "white" }}
        />
      </IconButton>
      <Box marginTop={4}>
          <Typography fontSize={48} fontWeight={300}>Create new account</Typography>
          <Typography color='rgba(255, 255, 255, 0.7)' fontSize={12}>Use your email to create new account.. it's free</Typography>
      </Box>
      <Stack sx={{marginTop:'4rem'}} spacing={2}>
      <TextField
          label="full name"
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
          label="email address"
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
          label="mobile phone"
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
        <Checkbox aria-label="I have read the Teaarms and Conditions."/>
        <Button variant="contained" fullWidth>Register now</Button>
        <Typography fontSize={12}>Have an account? 

        <Link
            to="/login"
            style={{
              color: "rgb(3, 169, 244)",
              textDecoration: "none",
              fontWeight: "800",
            }}
          >
            login
          </Link>
        </Typography>
      </Stack>
    </Box>
  );
};

export default SignUp;
