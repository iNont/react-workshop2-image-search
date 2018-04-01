const SET_STATE = "SET_STATE";
const RESET_STATE = "RESET_STATE";

const initialState = {

};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_STATE:
      return {
      ...state,
      ...action.state
    };
    case RESET_STATE:
      return initialState;
    default:
      return state;
  }
}

export const setState = (state) => ({
  type: SET_STATE,
  state
});

export const resetState = () => ({
  type: RESET_STATE
});
