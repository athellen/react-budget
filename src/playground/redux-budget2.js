import { createStore, combineReducers } from "redux";
import uuid from "uuid";
//add expense

const addExpense = (expense = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    description: expense.description,
    note: expense.note,
    amount: expense.amount,
    createdAt: expense.createdAt
  }
});
//remove_expense
const removeExpense = (expense = {}) => ({
  type: "REMOVE_EXPENSE",
  id: expense.id
});

//Expenses Reducer
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return state.concat(action.expense);
    case "REMOVE_EXPENSE":
      return state.filter(expense => expense.id !== action.id);
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
const filtersReducer = (state = filtersReducerDefaultState, action) => {
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
const expenseOne = store.dispatch(
  addExpense({ description: "painting", amount: 8000 })
);
const expenseTwo = store.dispatch(
  addExpense({ description: "coffee", amount: 500 })
);
store.dispatch(removeExpense({ id: expenseOne.expense.id }));
