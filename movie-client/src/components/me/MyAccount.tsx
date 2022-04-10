import {
  Box,
  Button,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const MyAccount = () => {
  return (
    <Box sx={{ color: "white", padding: "1rem", paddingTop: "30px" }}>
      <Typography fontSize={48} textAlign="center" padding={2} fontWeight={300}>
        My Account
      </Typography>
      <Box sx={{ background: "rgb(26, 26, 26)", padding: "2rem" }}>
        <Stack direction="row" spacing={4}>
          <Box>
            <Typography fontSize={48}>Hireoo</Typography>
            <Typography fontSize={12} color="rgba(255, 255, 255, 0.7)">
              hireoochen@gmail.com
            </Typography>
            <Typography fontSize={12} color="rgba(255, 255, 255, 0.7)">
              2022-03-24{" "}
            </Typography>
          </Box>
          <Box
            sx={{
              border: "1px white solid",
              height: "110px",
              width: "100px",
              borderRadius: "100%",
            }}
          ></Box>
        </Stack>
        <Box>
          <Button>Upload Picture</Button>
        </Box>
      </Box>
      <Box
        sx={{
          background: "rgb(26, 26, 26)",
          padding: "2rem",
          marginTop: "2rem",
        }}
      >
        <Box>
          <Typography fontSize={18} fontWeight={500}>
            Profile
          </Typography>
          <Typography fontSize={11} fontWeight={400}>
            The infomation can be edited
          </Typography>
        </Box>
        <Divider />
        <Stack spacing={2}>
        <TextField
          label="Full name"
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
          label="Email address"
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
          label="Phone number"
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
          label="Password"
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
        <Button variant="contained">Save Details</Button>

        </Stack>
       
      </Box>
    </Box>
  );
};

export default MyAccount;
