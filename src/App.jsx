import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "./actions/counterActions";

// .add {
//   background-color: green;
//   color: white;
//   height: 40px;
//   width: 100px;
//   border: none;
//   border-radius: 5px;
// }

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <div className="text-center flex flex-col h-screen items-center justify-center m-auto">
      <h1>Counter App</h1>
      <p>{count}</p>
      <div className="flex justify-center gap-5 text-white">
        <button
          className="bg-green-500 h-10 w-24 rounded-xl"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          className="bg-red-500 h-10 w-24 rounded-xl"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          className="bg-gray-500 h-10 w-24 rounded-xl"
          onClick={() => dispatch(reset())}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
