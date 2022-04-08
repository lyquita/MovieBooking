import { Box } from '@mui/material';
import React from 'react'
import Banner from '../components/showtime/Banner';
import Confirm from '../components/showtime/Confirm';
import Filter from '../components/showtime/Filter';
import SeatMap from '../components/showtime/SeatMap';

const Showtime =() => {

    return(
        <Box sx={{background:'black'}}>
            <Banner />
            <Filter />
            <SeatMap />
            <Confirm />
        </Box>
    )
}

export default Showtime;