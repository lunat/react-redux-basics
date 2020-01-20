//0. Redux parts
//npm install --save redux
//reducer
//store
//dispatching action
//subscription
//npm install --save react-redux (for Provider wrapper and connect -> mapDispatchToProps)

// 1
//const redux = require('redux');
//const createStore = redux.createStore;
//const rootReducer = (state, action) => {
//   return state;
//}
//const store = createStore(rootReducer);
//console.log(store);
//console.log(store.getState());

// 2 - initialise initial state
//const redux = require('redux');
//const createStore = redux.createStore;
//const initialState = {
//   counter: 0
//}
//const rootReducer = (state = initialState, action) => {
//   return state;
//}
//const store = createStore(rootReducer);
//console.log(store.getState());

// 3 - Dispatching actions
//const redux = require('redux');
//const createStore = redux.createStore;
//const initialState = {
//   counter: 0
//}
//const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//      case 'INC_COUNTER':
//         return {
//            ...state,
//            counter: state.counter + 1
//         };
//      case 'ADD_COUNTER':
//         return {
//            ...state,
//            counter: state.counter + action.value
//         };
//      default:
//         return state;
//   }
//}
//const store = createStore(rootReducer);
//console.log(store.getState());
//store.dispatch({type: 'INC_COUNTER'}); // dispatch function takes an argument, an action, a JS object with "type" property
//store.dispatch({type: 'ADD_COUNTER', value: 10}); //after type we can add all property we want
//console.log(store.getState());

// 4 - Subscriptions - typically after the store creation
//const redux = require('redux');
//const createStore = redux.createStore;
//const initialState = {
//   counter: 0
//}
//const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//      case 'INC_COUNTER':
//         return {
//            ...state,
//            counter: state.counter + 1
//         };
//      case 'ADD_COUNTER':
//         return {
//            ...state,
//            counter: state.counter + action.value
//         };
//      default:
//         return state;
//   }
//}
//const store = createStore(rootReducer);
//console.log(store.getState());
//store.subscribe(() => {
//   console.log('[SUBSCRIPTION]', store.getState());
//});
//store.dispatch({type: 'INC_COUNTER'}); // dispatch function takes an argument, an action, a JS object with "type" property
//store.dispatch({type: 'ADD_COUNTER', value: 10}); //after type we can add all property we want
//console.log(store.getState());