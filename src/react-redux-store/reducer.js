const initialState = {};

const ShortlistedReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_SHORTLISTED": {
      let newAdded = action.payload;
      return { ...state, ...newAdded };
    }
    case "REMOVE_SHORTLISTED": {
      let oldState = { ...state };
      delete oldState[action.payload];
      return { ...oldState };
    }
    default:
      return state;
  }
};

export default ShortlistedReducer;
