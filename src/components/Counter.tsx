import React from "react";

import { useAppSelector, useAppDispatch } from "../app/hooks";

import { decrement, increment } from "../feature/counter/counterSlice";

export function Counter() {
  // The `state` arg is correctly typed as `RootState` already
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const incrementHandler = () => dispatch(increment());
  const decrementHandler = () => dispatch(decrement());
  // omit rendering logic
  return (
    <span>
      <button onClick={incrementHandler}>Increment</button>
      <h1>{count}</h1>
      <button onClick={decrementHandler}>Decrement</button>
    </span>
  );
}
