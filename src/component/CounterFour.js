import React, { useReducer } from 'react';
const initialState = 0;

const reducer = (state, action) => {
    switch (action.type) {
        case 'increase':
            return state + action.value;
        case 'decrease':
            return state - action.value;
        case 'increase2':
            return state + action.value;
        case 'decrease2':
            return state - action.value;
        default:
            return state;
    }
}
const CounterFour = () => {
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <h2>4.Another complex case of useReducer</h2>
            <p>[Count]--[{count}]</p>
            <button onClick={() => dispatch({
                type: 'increase',
                value: 1
            })}>Increase by 1</button>
            <button onClick={() => dispatch({
                type: 'decrease',
                value: 1
            })}>Decrease by 1</button>
            <br />
            <button onClick={() => dispatch({
                type: 'increase2',
                value: 5
            })}>Increase by 5</button>
            <button onClick={() => dispatch({
                type: 'decrease2',
                value: 5
            })}>Decrease by 5</button>
        </div>
    );
};

export default CounterFour;