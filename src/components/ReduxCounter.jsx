import { useSelector, useDispatch } from "react-redux";
import {
    increment,
    decrement,
    reset,
} from "../redux/counterSlice";

export default function ReduxCounter() {
    const count = useSelector((state) =>
    state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Redux Counter: {count}</h2>
            <button onClick={() =>
                dispatch(increment())
            }>+</button>
            <button onClick={() =>
                dispatch(decrement())
            }>-</button>
            <button onClick={() =>
                dispatch(reset())
            }>Reset</button>
        </div>
    )
}
