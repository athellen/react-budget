import expensesReducers from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

test("should set default state", () => {
  const state = expensesReducers(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("Should remove expense by Id", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[1].id
  };
  const state = expensesReducers(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should add an expense", () => {
  const expense = {
    id: "4",
    description: "Laptop",
    note: "great",
    createdAt: 8790,
    amount: 45000
  };

  const action = {
    type: "ADD_EXPENSE",
    expense
  };
  const state = expensesReducers(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});
