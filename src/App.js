import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "./store";

const App = () => {
const counter = useSelector((state) => state.counter)
const dispatch = useDispatch();
const increment = () => {
    dispatch(actions.increment())
}

const decrement = () => {
    dispatch(actions.decrement())
}

const addBy = () => {
    dispatch(actions.addBy(10))
}
return (
    <>
    <h1>Add counter</h1>
    <p>{counter}</p>
    <button type="button" onClick={increment}>Increment</button>
    <button type="button" onClick={decrement}>Decrement</button>
    <button type="button" onClick={addBy}>AddBy</button>
    </>
)
}

export default App;
