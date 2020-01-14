import * as types from "../types";

const initialState = {
  data: []
};

export default function repoState(state = initialState, action) {
  switch (action.type) {
    case types.SET_REPO_DATA:
      // return Object.assign({}, state, {
      //   data: action.data
      // });
      return {...state,...{data:action.data}}
    default:
      return state;
  }
}
