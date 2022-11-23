import React, { useReducer } from 'react';
const initialState = 0;
const initialState2 = 5;

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
const CounterOne = () => {
    const [count, dispatch] = useReducer(reduce, initialState);
    const [count2, dispatch2] = useReducer(reduce, initialState2);
    return (
        <div>
            <h2>1.Simple React useReducer</h2>
            <div>
                <p>[Count]--[{count}]</p>
                <button onClick={() => dispatch({
                    type: 'increment'
                })}>Increase</button>

                <button onClick={() => dispatch({
                    type: 'decrement'
                })}>Decrease</button>
            </div>
            <div>
                <p>Here is the local use of useReducer in same component. Here initial value of this count is 5.</p>
                <p>[Count2]--[{count2}]</p>
                <button onClick={() => dispatch2({
                    type: 'increment'
                })}>Increase</button>

                <button onClick={() => dispatch2({
                    type: 'decrement'
                })}>Decrease</button>
            </div>
        </div>
    );
};

export default CounterOne;