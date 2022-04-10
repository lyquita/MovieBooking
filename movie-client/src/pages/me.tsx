import { Box } from "@mui/material";
import MyAccount from "../components/me/MyAccount";
import MyReserved from "../components/me/MyReserved";

const Me =() => {

    return(
        <Box sx={{background:'black'}}>
            <MyReserved />
            <MyAccount />
        </Box>
    )
}

export default Me;
