const initialState = {
  demo: "sathish",
  availableBalance: 5000,
  matchHeading: "",
  backBtn: "",
  apiBase: "http://criczz.us-east-2.elasticbeanstalk.com/criczz"
};

function rootReducer(state = initialState, action: any) {
  switch (action.type) {
    case "SET_VAL":
      return {
        ...state,
        demo: action.value,
      };
    case "SET_MATCHNAME":
      return {
        ...state,
        matchHeading: action.value,
      };
    default:
      return state;
  }
}

export default rootReducer;
