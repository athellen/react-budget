import { createStore } from "redux"; //state is a container

//Action creators - functions that return objects
const incrementCount = (payload = {}) => {
  return {
    type: "INCREMENT",
    incrementBy:
      typeof payload.incrementBy === "number" ? payload.incrementBy : 1
  };
};

const decrementCount = (payload = {}) => {
  return {
    type: "DECREMENT",
    decrementBy:
      typeof payload.decrementBy === "number" ? payload.decrementBy : 1
  };
};
const setCount = payload => {
  return {
    type: "SET",
    count: payload.count
  };
};
const resetCount = () => {
  return {
    type: "RESET"
  };
};
//reducers are pure function
const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy
        // count: state.count + increment
      };
    case "SET":
      return {
        count: action.count
      };

    case "RESET":
      return {
        count: 0
      };

    case "DECREMENT":
      return {
        count: state.count - action.decrementBy
      };
    default:
      return state;
  }
};
const store = createStore(countReducer);
store.subscribe(() => {
  console.log(store.getState());
});

//action is an object that gets sent to the store
//action must have a type/ pay load

//increment count
store.dispatch(incrementCount({ incrementBy: 5 })); //dispatching invocation

store.dispatch(incrementCount());
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

// store.dispatch({
//     type: 'INCREMENT'
// });

// store.dispatch
// ({
//     type:'RESET',

// });
store.dispatch(resetCount());
store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 10 }));

// store.dispatch({
//     type:'DECREMENT',
//     decrementBy:10

// store.dispatch({
//     type:'SET',
//     count: '101'
// });
store.dispatch(setCount({ count: 101 }));
