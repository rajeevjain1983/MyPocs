import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import globalReducer from "../reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import globalSaga from "../saga";

const sagaMiddleware = createSagaMiddleware();

const configureStore = createStore(
  globalReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(globalSaga);

export default configureStore;
