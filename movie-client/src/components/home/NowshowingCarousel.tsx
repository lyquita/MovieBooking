import { Box, Typography } from "@mui/material";
import { Fragment } from "react";
import Slider from "react-slick";


const NowshowingCarousel = () => {

    const settings = {
        centerMode: true,
        infinite: true,
        centerPadding: "50px",
        slidesToShow: 1,
        speed: 500,
        className: 'center'
      };

    return(
       <Box sx={{marginTop:'48px'}}>
           <Box sx={{color:'white', display:'flex'}}>
               <Typography fontSize={32} fontWeight={300} lineHeight={1.5} padding='2rem'>Now Showing</Typography>
               <Typography fontSize={11} sx={{display:'flex', alignItems:'center'}} color='#03a9f4'>Explore All</Typography>
           </Box>
           <Box>
               <Slider {...settings} >
                   <Box >
                       <Box sx={{width:'200px', height:'200px', background:'red'}}></Box>
                       <Typography color='white'>Spider Man</Typography>
                       {/* <img src="https://image.tmdb.org/t/p/original/uUiId6cG32JSRI6RyBQSvQtLjz2.jpg" alt=""/> */}
                   </Box>
                   <Box sx={{width:'300px', height:'500px', background:'blue'}}>
                       {/* <img  src="https://image.tmdb.org/t/p/original/rtf4vjjLZLalpOzDUi0Qd2GTUqq.jpg" alt=""/> */}
                   </Box>
                   <Box sx={{width:'300px', height:'500px', background:'yellow'}}>
                       {/* <img src="https://image.tmdb.org/t/p/original/uUiId6cG32JSRI6RyBQSvQtLjz2.jpg" alt=""/> */}
                   </Box>
                   <Box sx={{width:'300px', height:'500px', background:'green'}}>
                       {/* <img  src="https://image.tmdb.org/t/p/original/rtf4vjjLZLalpOzDUi0Qd2GTUqq.jpg" alt=""/> */}
                   </Box>
               </Slider>
           </Box>
       </Box>
    )
}

export default NowshowingCarousel;