import data from "../data/data.json";

export const GET_ITEMS_SUCCESS = "GET_ITEMS_SUCCESS";
const GET_ITEM_DETAILS = "GET_ITEM_DETAILS";

const getItemsSuccess = (items) => ({
  items,
  type: GET_ITEMS_SUCCESS,
});

export const fetchCards = () => {
  return (dispatch) =>
    new Promise((res, rej) => {
      setTimeout(() => {
        dispatch(getItemsSuccess(data));
        res(data);
      }, 1000);
    });
};
