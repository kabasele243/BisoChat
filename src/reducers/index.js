import { combineReducers } from "redux";
import * as actionsTypes from "../actions/types";

const initialUserState = {
  currentUser: null,
  isLoading: true
};

const user_reducer = (state = initialUserState, action) => {
  switch (action.type) {
    case actionsTypes.SET_USER:
      return {
        currentUser: action.payload.currentUser,
        isLoading: false
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  user: user_reducer
});

export default rootReducer;
