import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

// Actions
const incrementCounter = {
  type: '@counter/incremented'
}

const decrementCounter = {
  type: '@counter/decremented'
}

const resetCounter = {
  type: '@counter/reseted'
}


// Reducer
const counterReducer = (state = 0, action) => {
  switch(action.type) {
      case '@counter/incremented': 
          return state + 1;
      case '@counter/decremented':
          return state - 1;
      case '@counter/reseted':
          return 0;
      default:
          return state;
  }
}

// Store
const store = createStore(
  counterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const App = () => {
  return (
    <div>
      <h1>{ store.getState() }</h1>
      <button onClick={() => store.dispatch(incrementCounter)}>+</button>
      <button onClick={() => store.dispatch(decrementCounter)}>-</button>
      <button onClick={() => store.dispatch(resetCounter)}>Reset</button>
    </div>
  );
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root')
  );
}

renderApp();
store.subscribe(renderApp);
