import React, { useReducer } from 'react';
import CounterThree from './CounterThree';
const initialState = {
    count: 0,
    count2: 0,
};
const reduce = (state, action) => {
    switch (action) {
        case 'increment':
            return { ...state, count: state.count + 1 };
        case 'decrement':
            return { ...state, count: state.count - 1 };
        case 'increment2':
            return { ...state, count2: state.count2 + 1 };
        case 'decrement2':
            return { ...state, count2: state.count2 - 1 };
        default:
            return state;
    }
}
const CountWithReducer = () => {
    const [count, dispatch] = useReducer(reduce, initialState);
    return (
        <div>
            <h2>2.Complex useReducer</h2>
            <p>Here, there is one useReducer hook with a object type initial state</p>
            <div>
                <p>[Count 1]--[{count.count}]</p>

                <button onClick={() => dispatch('increment')}>Increment</button>

                <button onClick={() => dispatch('decrement')}>Decrement</button>
            </div>
            <div>
                <p>[Count 2]--[{count.count2}]</p>

                <button onClick={() => dispatch('increment2')}>Increment 2</button>

                <button onClick={() => dispatch('decrement2')}>Decrement 2</button>
            </div>
            <hr />
            <div>
                <h2>CounterThree component(form 2 to 3)</h2>
                <CounterThree />
            </div>
        </div>
    );
};

export default CountWithReducer;