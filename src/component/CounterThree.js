import React from 'react';
import { counterContext } from '../App';

const CounterThree = () => {
    const counter = React.useContext(counterContext);

    return (
        <div>
            <h3>3.Complex useReducer with context API</h3>
            <p>[Count]--[{counter.count}]</p>

            <button onClick={() => counter.dispatch({
                type: 'increment'
            })}>Increment</button>

            <button onClick={() => counter.dispatch({
                type: 'decrement'
            })}>Decrement</button>
            <p>The value of count came from app component via context api. This component is the child of component 2 and component 2 is the child of app component.</p>
        </div>
    );
};

export default CounterThree;