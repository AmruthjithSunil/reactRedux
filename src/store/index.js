import { createStore } from "redux";

function CounterReducer(state = { counter: 0 }, action) {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }

  if (action.type === "incrementby5") {
    return {
      counter: state.counter + 5,
    };
  }

  if (action.type === "decrementby5") {
    return {
      counter: state.counter - 5,
    };
  }

  return state;
}

const store = createStore(CounterReducer);

export default store;
