import { createStore, combineReducers } from "redux";
import uuid from "uuid";

//add expense
const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

//Expenses Reducer
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [state, action.expense];
    default:
      return state;
  }
};
//filters reducer
const filtersReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined
};
const filtersReducer = (State = filtersReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

//store creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(
  addExpense({
    description: "painting",
    amount: 8000
  })
);
