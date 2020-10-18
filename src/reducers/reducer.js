import { GET_ITEMS_SUCCESS } from "../actions/actions";

const cardReducer = (state = { items: [] }, action) => {
  switch (action.type) {
    case GET_ITEMS_SUCCESS:
      return {
        items: [...state.items, ...action.items],
      };
    default:
      return state;
  }
};

export default cardReducer;
