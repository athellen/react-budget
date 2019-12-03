//use different action creators to increment, decrement, set a value(e.g 500) reset a value to 0
//dispatch the action creators to the reducer and change the state
//to do this import the createstore module and use subscribe to not state changes with each dispatch

import {createStore} from 'redux';

const defaultState = { count: 0};

const counterReducer = ( state = defaultState, action ) => {
  switch(action.type) {
    case 'INCREMENT':
     const incrementBy = action.incrementBy ? action.incrementBy : 1
     return {
       count: state.action + incrementBy
     }
    
    case 'DECREMENT':
    const decrementBy = action.decrementBy ? action.decrementBy : 1
    return {
      count: state.count + decrementBy
    }

    case 'SET':
      return {
        count: action.count
      }

      case 'RESET':
      return {
        count: action.count
      }
      
      default: 
      return state;
  }
}
  const incrementCount = (payload = {}) => ({
    type: 'INCREMENT',
    incrementBy: payload.incrementBy ? payload.incrementBy : 1
  })
  
  const decrementCount = (payload = {}) => ({
    type: 'DECREMENT',
    decrementBy: payload.decrementBy ? payload.decrementBy : 1
  })

  const setCount = (payload = {}) => ({
    type: 'SET',
    count: 250
  })
  
  const resetCount = (payload = {}) =>{
    return {
    type: 'RESET'
  }};


const Store = createStore(counterReducer);

Store.subscribe = (
  console.log(Store.getState())
);

Store.dispatch(incrementCount());
Store.dispatch(decrementCount());
Store.dispatch(setCount());
Store.dispatch(resetCount());

const pam = {incrementBy: 10};
Store.dispatch(incrementCount(pam));

const ash = {decrementBy: 5};
Store.dispatch(decrementCount(ash));
