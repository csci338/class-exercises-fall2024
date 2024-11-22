import React, { useState } from "react";

export default function ButtonCount({val}) {
    // biggest idea in React is: state variables!
    const [count, setCount] = useState(val);

    function addOne() {
        setCount(count + 1);
    }

    function resetCounter() {
        setCount(val);
    }

    return (
        <div>
            <button onClick={addOne}>You have clicked {count} times</button>
            <button onClick={resetCounter}>reset</button>
        </div>
    );
}