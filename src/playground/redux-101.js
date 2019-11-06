import {createStore} from 'redux';//state is a container

const store = createStore((state = {count: 0}, action) => {
    switch(action.type) {
        case 'INCREMENT':
        return {
            count: state.count + 1
        };
        case 'RESET':
            return {
                count:0
            };

            case 'DECREMENT':
                return {
                    count:state.count -1
                };
        default:
            return state;
        
    }
});
console.log(store.getState());

//action is an object that gets sent to the store
//action must have a type/ pay load

//increment count 
store.dispatch({
    type: 'INCREMENT'
});

store.dispatch({
    type: 'INCREMENT'
});

store.dispatch
({
    type:'RESET'
});
store.dispatch({
    type:'DECREMENT'
})
console.log(store.getState());