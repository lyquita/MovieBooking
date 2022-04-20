import { Box, List, ListItem, Typography } from "@mui/material";

const SeatMap = () =>{

    return(
        <Box sx={{color:'white', padding:{md:'0 12rem', xs:'2rem'}, display:'flex', flexDirection:'column', alignItems:'center'}}>
            <Box sx={{border:'2px solid rgb(96, 93, 169)', width:'80%'}}>
            </Box>
            <Typography marginBottom={4}>Screen</Typography>
            <Box className="rows">
                <Box className="columns">1</Box>
                <Box className="columns" >2</Box>
                <Box className="columns">3</Box>
                <Box className="columns">4</Box>
                <Box className="columns">5</Box>
                <Box className="columns">6</Box>
            </Box>
            <Box className="rows">
                <Box className="columns">1</Box>
                <Box className="columns">2</Box>
                <Box className="columns">3</Box>
                <Box className="columns">4</Box>
                <Box className="columns">5</Box>
                <Box className="columns">6</Box>
                <Box className="columns">7</Box>
                <Box className="columns">8</Box>
            </Box>
            <Box className="rows">
                <Box className="columns">1</Box>
                <Box className="columns">2</Box>
                <Box className="columns">3</Box>
                <Box className="columns">4</Box>
            </Box>
            <Box className="rows">
                <Box className="columns">1</Box>
                <Box className="columns">2</Box>
                <Box className="columns">3</Box>
                <Box className="columns">4</Box>
                <Box className="columns">5</Box>
                <Box className="columns">6</Box>
                <Box className="columns">7</Box>
                <Box className="columns">8</Box>
            </Box>
          <List sx={{marginTop:'1rem', fontSize:'12px'}}>
              <ListItem>Seat available</ListItem>
              <ListItem>Reserved Seat</ListItem>
              <ListItem>Selected Seat</ListItem>
          </List>
        </Box>
    )
}

export default SeatMap;