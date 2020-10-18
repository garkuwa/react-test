import thunkMiddleware from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import cardReducer from "../reducers/reducer";
import { fetchCardsSaga } from "../saga/sags";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  cardReducer,
  applyMiddleware(
    sagaMiddleware
    // thunkMiddleware // lets us dispatch() functions
    //loggerMiddleware // neat middleware that logs actions
  )
);

sagaMiddleware.run(fetchCardsSaga);

export default store;
