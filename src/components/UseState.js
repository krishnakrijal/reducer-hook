import React, { useState } from 'react';

function UseState(props) {

    const [count,setCount]= useState(0)
    return (
        <div>
            <h2>Your count is {count}</h2>
            <button onClick={()=>setCount(count+1)}>+1</button>
        </div>
    );
}

export default UseState;