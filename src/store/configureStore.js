import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import expensesReducer from "../reducers/expenses";
import filtersReducer from "../reducers/filters";

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
export default () => {
  //store creation
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};
