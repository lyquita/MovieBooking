import { AnyRecord } from "dns";
import seatData from "../utils/seatdata.json";

export interface State {
  columns: number;
  rows: number;
  seats: [];
}

export interface Actions {
  type: "GET" | "SET" | "REMOVE";
  seatDataState?: any;
}

function SeatDataReducer(state: State, action: Actions) {
  switch (action.type) {
    case "GET":
      return seatData;
    case "SET":
      return action?.seatDataState;
    case "REMOVE":
      return seatData;
    default:
      return state;
  }
}

export default SeatDataReducer;
