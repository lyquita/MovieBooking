import { Box, Grid, Typography } from "@mui/material";

const Confirm = () => {
  return (
    <Box sx={{display:'flex', justifyContent:'center'}}>

    <Grid container sx={{ width: "80%", background: "rgb(26, 26, 26)", alignItems:'center'}} >
      <Grid item xs={4} padding={2}>
        <Typography color="rgb(93, 93, 97)">Tickets</Typography>
        <Typography color="white">1 </Typography>
      </Grid>
      <Grid item xs={4} padding={2}>
        <Typography color="rgb(93, 93, 97)">Price</Typography>
        <Typography color="white">$10</Typography>
      </Grid>
      <Grid item xs={4} padding={2}  sx={{background:'black', height:'100%', display:'flex', alignItems:'center', border:'#282c34 1px solid'}} >
        <Typography color='rgb(120, 205, 4)'>Checkout</Typography>
      </Grid>
    </Grid>
    </Box>

  );
};

export default Confirm;
