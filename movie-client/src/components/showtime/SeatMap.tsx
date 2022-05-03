import { ViewColumnSharp } from "@mui/icons-material";
import { Box, List, ListItem, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import seatData from "../../utils/seatdata.json";

interface Props {
  setSelectedSeat: (value: any) => void;
  setSelectedAmount: (value: any) => void;
  selectedSeat: string[];
}

const SeatMap: React.FC<Props> = ({ setSelectedSeat, setSelectedAmount }) => {
  const [seatdata, setSeatData] = useState(seatData);
  const selectedSeats: string[] = [];
  const selectedAmount: number[] = [0];

  seatdata.seats.map((rows) =>
    rows.map((column) =>
      column.status === "selected"
        ? selectedSeats.push(column.name) && selectedAmount.push(column.price)
        : ""
    )
  );

  useEffect(() => {
    setSelectedSeat(selectedSeats);
    setSelectedAmount(
      selectedAmount.reduce(function (a, b) {
        return a + b;
      })
    );
  }, [seatdata]);

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
      {seatdata.seats.map((item) => (
        <Box className="rows">
          {item.map((m) => (
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

                setSeatData((prevState) => {
                  let temp = {
                    ...prevState,
                  };

                  return temp;
                });
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
