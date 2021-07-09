// import logo from "./logo.svg";
import { useState, useEffect } from "react";
import {
  ALGORITHM,
  ALGORITHM_KEY,
  ALGORITHM_DESC,
} from "./utilities/Constants";
import { initialState } from "./utilities/Constants";
import { generateRandomArray, createTrace } from "./utilities/ArrayFunctions";
import Navbar from "./components/Navbar";
import Visualizer from "./components/Visualizer";
import "./App.css";

function App() {
  const [arraySize, setArraySize] = useState(initialState.arraySize);
  const [array, setArray] = useState(initialState.array);
  const [algo, setAlgo] = useState("Selection Sort"); //useState(initialState.algorithm);
  const [trace, setTrace] = useState(initialState.trace);

  useEffect(() => {
    const newArray = generateRandomArray(arraySize);
    const trace = createTrace(newArray, ALGORITHM[algo]);
    //setArraySize(arraySize);
    //setAlgo(algo);
    setArray(newArray);
    setTrace(trace);
  }, [arraySize, algo]);

  const onAlgorithmChange = (algo) => {
    setAlgo(algo);
  };
  const onArraySizeChange = (size) => {
    setArraySize(size);
  };
  const onRandomize = () => {
    const newArray = generateRandomArray(arraySize);
    let trace = createTrace(newArray, ALGORITHM[algo]);
    setArray(newArray);
    setTrace(trace);
  };

  const colorKey = ALGORITHM_KEY[algo];
  const desc = ALGORITHM_DESC[algo];

  return (
    <div className="theme">
      <Navbar
        algo={algo}
        onAlgorithmChange={onAlgorithmChange}
        arraySize={arraySize}
        onArraySizeChange={onArraySizeChange}
        onRandomize={onRandomize}
      />
      <main className="body">
        <Visualizer
          array={array}
          trace={trace}
          colorKey={colorKey}
          desc={desc}></Visualizer>
      </main>
    </div>
  );
}

export default App;
