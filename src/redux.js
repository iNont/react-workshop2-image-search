const RESET_STATE = "RESET_STATE";

const initialState = {

};

export default (state = initialState, action) => {
  switch (action.type) {
    case RESET_STATE:
      return initialState;
    default:
      return state;
  }
}

export const resetState = () => ({
  type: RESET_STATE
});
