import { Box, Divider, Typography } from '@mui/material';
import React from 'react';


const Footer = () => {

    return(
        <Box sx={{background:'rgba(0, 0, 0, 0.87)', color:'white', display:'flex', justifyContent:'center', padding:'2rem 0', flexDirection:'column', alignItems:'center'}}>
            <Divider variant='middle'/>
            <Typography variant='body1' > © Hireoo 2022 </Typography>
            <Typography variant='caption'> Peace and Love </Typography>
        </Box>
    )
}

export default Footer;