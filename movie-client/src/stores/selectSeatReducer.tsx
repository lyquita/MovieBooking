export interface State {
  selectedSeat: string[];
}

export interface Actions {
  type: "ADD_SEAT" | "REMOVE_ALL_SEAT";
  selectedSeats?: any;
}

function reducer(state: State, action: Actions) {
  switch (action.type) {
    case "ADD_SEAT":
      return {
        selectedSeat: action?.selectedSeats,
      };
    case "REMOVE_ALL_SEAT":
      return { selectedSeat: [""] };
    default:
      return state;
  }
}

export default reducer;
