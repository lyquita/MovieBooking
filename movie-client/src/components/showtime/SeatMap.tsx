import { ViewColumnSharp } from "@mui/icons-material";
import { Box, List, ListItem, Typography } from "@mui/material";
import axios from "axios";
import React, {
  Reducer,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import reducer from "../../stores/selectSeatReducer";
import seatData from "../../utils/seatdata.json";
import SeatDataReducer, { State, Actions } from "../../stores/seatDataReducer";

interface Props {
  setSelectedSeat: (value: any) => void;
  setSelectedAmount: (value: any) => void;
  selectedSeat: string[];
}

const SeatMap: React.FC<Props> = ({ setSelectedSeat, setSelectedAmount }) => {
  const selectedSeats: string[] = [];
  const selectedAmount: number[] = [0];
  const [stateChange, setStateChange] = useState(true);

  //@ts-ignore
  const [seatDataState, seatDataDispatch] = useReducer(
    SeatDataReducer,
    seatData
  );

  //@ts-ignore
  const [state, dispatch] = useReducer(reducer, {
    selectedSeat: [],
  });

  if (Array.isArray(seatDataState.seats)) {
    seatDataState.seats.map((rows: any) =>
      rows.map((column: any) =>
        column.status === "selected"
          ? selectedSeats.push(column.name) && selectedAmount.push(column.price)
          : ""
      )
    );
  }

  console.log("state", seatDataState);

  useEffect(() => {
    //@ts-ignore
    // dispatch({ type: "ADD_SEAT", selectedSeats });
    setSelectedSeat(selectedSeats);
    setSelectedAmount(
      selectedAmount.reduce(function (a, b) {
        return a + b;
      })
    );
  }, [stateChange]);

  return (
    <Box
      sx={{
        color: "white",
        padding: { md: "0 12rem", xs: "2rem" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box sx={{ border: "2px solid rgb(96, 93, 169)", width: "80%" }}></Box>
      <Typography marginBottom={4}>Screen</Typography>
      {seatDataState.seats.map((item: any[]) => (
        <Box className="rows">
          {item.map((m: any) => (
            <Box
              className={`${m.shouldDisplay ? "columns" : "invisible"} ${
                m.status === "available"
                  ? "available"
                  : m.status === "selected"
                  ? "selected"
                  : "occupied"
              }`}
              onClick={() => {
                if (m.status === "available") {
                  m.status = "selected";
                } else {
                  m.status = "available";
                }
                //@ts-ignore
                seatDataDispatch({ type: "SET", seatDataState });

                stateChange ? setStateChange(false) : setStateChange(true);
              }}
            >
              {m.name}
            </Box>
          ))}
        </Box>
      ))}
      <List sx={{ marginTop: "1rem", fontSize: "12px" }}>
        <ListItem>Seat available</ListItem>
        <ListItem>Reserved Seat</ListItem>
        <ListItem>Selected Seat</ListItem>
      </List>
    </Box>
  );
};

export default SeatMap;
