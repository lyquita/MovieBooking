import {
  Box,
  Button,
  Input,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const Reserved = () => {
  return (
    <Box sx={{ background: "black", paddingBottom: "1.5rem" }}>
      <Box
        sx={{
          background: "rgb(59, 59, 59)",
          margin: "1.5rem 1.5rem 0 1.5rem",
          padding: "2rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          color: "white",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "3rem",
          }}
        >
          <Typography fontSize={26}>Guest Invitation</Typography>
          <Typography fontSize={12} margin="1rem 0">
            You have successfuly booked your seats. Please fill the emails
            below, to send invitations to your friends!
          </Typography>
          <Button variant="outlined">DOWNLOAD PASS</Button>
        </Box>
        <Box sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
          <TextField
            label="email"
            variant="outlined"
            helperText="Please input your email"
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "gray" },
              },
              input:{color:'white'},
              label:{color:'rgba(255, 255, 255, 0.7)'},
              "& p":{color:'rgba(255, 255, 255, 0.7)'},
              width:'100%' 
            }}
          />
          <Stack display='flex' flexDirection='row' marginTop={2} >
            <Button variant='outlined' sx={{marginRight:'1rem', '&.MuiButton-root':{color:'rgba(255, 255, 255, 0.7)', border:'1px solid rgba(255, 255, 255, 0.7)' }}}>Send Invitations</Button>
            <Link to='/' style={{'textDecoration':'none', color:'white'}}>
            <Button variant='outlined' color='warning'>Cancel</Button>
            </Link>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default Reserved;
