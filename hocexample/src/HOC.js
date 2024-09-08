import React, { useState } from 'react';

const HigherOrderComponent=(Child)=>{
    const InnerFunction=()=>{
        const [counter,setCounter]=useState(0);
        const clickHandler=()=>{
            setCounter(prev=>prev+1)
        }
        return(
            <Child counter={counter} clickHandler={clickHandler} />
        )
    }
    return InnerFunction;
}
export default HigherOrderComponent;