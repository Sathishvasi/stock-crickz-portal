const initialState = {
  demo: "sathish",
  availableBalance: 5000
};

function rootReducer(state = initialState, action: any) {
  switch (action.type) {
    case "SET_VAL":
      return {
        ...state,
        demo: action.value,
      };
    default:
      return state;
  }
}

export default rootReducer;
