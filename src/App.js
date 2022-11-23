import { createContext, useReducer } from 'react';
import './App.css';
import CounterFour from './component/CounterFour';
import CounterOne from './component/CounterOne';
import CountWithReducer from './component/CountWithReducer';
const initialState = 0;
const reduce = (state, action) => {
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      return state;
  }
}
const counterContext = createContext();

function App() {
  const [count, dispatch] = useReducer(reduce, initialState);
  return (
    <div className="App">
      <h1>Uses of React useReducer hooks</h1>
      <hr />
      <CounterOne />
      <hr />
      <counterContext.Provider value={{ count, dispatch }} >
        <CountWithReducer />
      </counterContext.Provider>
      <hr />
      <CounterFour />
      <hr />
    </div>
  );
}

export { App, counterContext };
