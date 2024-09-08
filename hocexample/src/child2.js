import React from 'react';
import HigherOrderComponent from './HOC';
const Child2 = (props) => {
    return (
        <div>
            <h3>{props.counter}</h3>
            <button onClick={() => props.clickHandler()} >Increment</button>
        </div>
    )
}
export default HigherOrderComponent(Child2);