import React, { useState } from "react";

export default function ButtonCount({ initialValue }) {
    // Initialize the state variable with the passed initialValue prop or default to 0
    const [count, setCount] = useState(initialValue || 0);

    function addOne() {
        setCount(count + 1);
    }

    function resetCounter() {
        setCount(initialValue || 0); // Reset to the initialValue, defaulting to 0
    }

    return (
        <div>
            <button onClick={addOne}>You have clicked {count} times</button>
            <button onClick={resetCounter}>Reset</button>
        </div>
    );
}
