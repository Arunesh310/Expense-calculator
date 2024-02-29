import { ADD_TRANSACTION } from "./actions";

const initialState = {
  transactions: [
    { id: 1, text: "hhhh", amount: 10 },
    { id: 2, text: "hhsdfh", amount: 30 },
    { id: 3, text: "hhdfd", amount: 60 },
    { id: 3, text: "hggg", amount: 77 },
  ],
};

const expeseTrackerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TRANSACTION:
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    default:
      return state;
  }
};

export default expeseTrackerReducer;
