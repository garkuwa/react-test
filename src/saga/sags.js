import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

import data from "../data/data.json";

const START_GETTING_ITEMS = "START_GETTING_ITEMS";
const GET_ITEMS_SUCCESS = "GET_ITEMS_SUCCESS";

const startFetchingCards = {
  type: START_GETTING_ITEMS,
};

const getCards = async () =>
  new Promise((res, rej) => {
    setTimeout(() => {
      res(data);
    }, 3000);
  });

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchCards() {
  const items = yield call(getCards);
  yield put({ type: GET_ITEMS_SUCCESS, items });
}
function* fetchCardsSaga() {
  yield takeLatest(START_GETTING_ITEMS, fetchCards);
}

export {
  START_GETTING_ITEMS,
  GET_ITEMS_SUCCESS,
  startFetchingCards,
  fetchCardsSaga,
};
