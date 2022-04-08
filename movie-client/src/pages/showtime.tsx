import { Box } from '@mui/material';
import React, { useState } from 'react'
import Banner from '../components/showtime/Banner';
import Confirm from '../components/showtime/Confirm';
import Filter from '../components/showtime/Filter';
import Reserved from '../components/showtime/Reserved';
import SeatMap from '../components/showtime/SeatMap';

const Showtime =() => {

    const [reserved, setReserved] = useState(false)

    if (!reserved){
        return(
            <Box sx={{background:'black'}}>
                <Banner />
                <Filter />
                <SeatMap />
                <Confirm setReserved={setReserved}/>
            </Box>
        )
    }else{
        return(
            <Box sx={{background:'black'}}>
                <Banner />
                <Filter />
                <Reserved />
            </Box>
        )
    }
    
}

export default Showtime;