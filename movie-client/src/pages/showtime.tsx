import { Box } from "@mui/material";
import React, { useState } from "react";
import Banner from "../components/showtime/Banner";
import Confirm from "../components/showtime/Confirm";
import Filter from "../components/showtime/Filter";
import Reserved from "../components/showtime/Reserved";
import SeatMap from "../components/showtime/SeatMap";

const Showtime = () => {
  const [reserved, setReserved] = useState(false);
  const [selectedSeat, setSelectedSeat] = useState<string[]>([]);
  const [selectedAmount, setSelectedAmount] = useState<number>(0);

  if (!reserved) {
    return (
      <Box sx={{ background: "black" }}>
        <Banner />
        <Filter />
        <SeatMap
          setSelectedSeat={setSelectedSeat}
          selectedSeat={selectedSeat}
          setSelectedAmount={setSelectedAmount}
        />
        <Confirm
          setReserved={setReserved}
          selectedSeat={selectedSeat}
          selectedAmount={selectedAmount}
          setSelectedSeat={setSelectedSeat}
        />
      </Box>
    );
  } else {
    return (
      <Box sx={{ background: "black" }}>
        <Banner />
        <Filter />
        <Reserved setSelectedSeat={setSelectedSeat} />
      </Box>
    );
  }
};

export default Showtime;
