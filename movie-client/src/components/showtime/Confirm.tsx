import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useReducer } from "react";
import SeatDataReducer from "../../stores/seatDataReducer";
import seatData from "../../utils/seatdata.json";

interface Props {
  setReserved: React.Dispatch<React.SetStateAction<boolean>>;
  selectedSeat: string[];
  selectedAmount: number;
  setSelectedSeat: (value: any) => void;
}

const Confirm: React.FC<Props> = ({
  setReserved,
  selectedSeat,
  selectedAmount,
  setSelectedSeat,
}) => {
  //@ts-ignore
  const [seatDataState, seatDataDispatch] = useReducer(
    SeatDataReducer,
    seatData
  );

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        paddingBottom: "2rem",
        padding: { md: "0 12rem" },
      }}
    >
      <Grid
        container
        sx={{
          width: "80%",
          background: "rgb(26, 26, 26)",
          alignItems: "center",
        }}
      >
        <Grid item xs={4} padding={2}>
          <Typography color="rgb(93, 93, 97)">Tickets</Typography>
          <Typography color="white">{selectedSeat.length} </Typography>
        </Grid>
        <Grid item xs={4} padding={2}>
          <Typography color="rgb(93, 93, 97)">Price</Typography>
          <Typography color="white">${selectedAmount}</Typography>
        </Grid>
        <Grid
          item
          xs={4}
          padding={2}
          sx={{
            background: "black",
            height: "100%",
            display: "flex",
            alignItems: "center",
            border: "#282c34 1px solid",
          }}
        >
          <Button
            onClick={() => {
              setSelectedSeat([]);
              setReserved(true);
            }}
          >
            <Typography
              color="rgb(120, 205, 4)"
              onClick={() => seatDataDispatch({ type: "REMOVE" })}
            >
              Checkout
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Confirm;
