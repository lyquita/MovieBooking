import { Box } from "@mui/material";
import MyAccount from "../components/me/MyAccount";
import MyReserved from "../components/me/MyReserved";

const Me =() => {

    return(
        <Box sx={{background:'black', padding:{md:'0 14rem'}}}>
            <MyReserved />
            <MyAccount />
        </Box>
    )
}

export default Me;
