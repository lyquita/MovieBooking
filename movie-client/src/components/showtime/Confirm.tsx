import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";

interface Props{
  setReserved:React.Dispatch<React.SetStateAction<boolean>>
}

const Confirm:React.FC<Props> = ({setReserved}) => {
  
  return (
    <Box sx={{display:'flex', justifyContent:'center', paddingBottom:'2rem'}}>

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
        <Button onClick={()=> setReserved(true)}>

        <Typography color='rgb(120, 205, 4)'>Checkout</Typography>

        </Button>
      </Grid>
    </Grid>
    </Box>

  );
};

export default Confirm;
