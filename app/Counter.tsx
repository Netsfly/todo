"use client";
import React from 'react'
import { useState } from 'react';

export default function Counter() {

    const [count, setCount] = useState<number>(0);

    const increment = (): void => setCount(count +1);
    const decrement = (): void => setCount(count -1);
    const reset = (): void => setCount(0);

  return (
    <div>
      <h1>Simple Counter Appp</h1>
      <p>Current: {count}</p>

        <button onClick={increment} style={{margin: "0 10px"}}>Increment</button>
        <button onClick={decrement} style={{margin: "0 10px"}}>Decrement</button>
        <button onClick={reset} style={{margin: "0 10px"}}>REST</button>


    </div>
  )
}
