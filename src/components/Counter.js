import { useDispatch, useSelector } from "react-redux";

import classes from "./Counter.module.css";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  function incrementHandler() {
    dispatch({ type: "increment" });
  }

  function decrementHandler() {
    dispatch({ type: "decrement" });
  }

  function incrementBy5Handler() {
    dispatch({ type: "incrementby5" });
  }

  function decrementBy5Handler() {
    dispatch({ type: "decrementby5" });
  }

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <div>
        <button onClick={incrementBy5Handler}>Incrementby5</button>
        <button onClick={decrementBy5Handler}>Decrementby5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
