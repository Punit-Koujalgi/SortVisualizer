import "./Navbar.css";
const Navbar = (props) => {
  const algoHandle = (event) => {
    props.onAlgorithmChange(event.target.innerHTML);
  };
  const sizeHandle = (event) => {
    const size = Number(event.target.innerHTML);
    document.getElementById("progress_active").style.width = "0%";
    props.onArraySizeChange(size);
  };

  return (
    <div id="navbar" className="container-fluid">
      <div className="name mb-0 h2">Sort Visualizer!</div>
      <div id="controls" className="container-fluid mt-3">
        <div className="dropdown putmargin">
          <button
            type="button"
            className="btn shadow-none dropdown-toggle navButtons"
            data-toggle="dropdown">
            {props.algo}
          </button>
          <ul className="dropdown-menu">
            <li className="dropdown-item" onClick={algoHandle}>
              Bubble Sort
            </li>
            <div className="dropdown-divider"></div>
            <li className="dropdown-item" onClick={algoHandle}>
              Selection Sort
            </li>
            <div className="dropdown-divider"></div>
            <li className="dropdown-item" onClick={algoHandle}>
              Insertion Sort
            </li>
            <div className="dropdown-divider"></div>
            <li className="dropdown-item" onClick={algoHandle}>
              Merge Sort
            </li>
            <div className="dropdown-divider"></div>
            <li className="dropdown-item" onClick={algoHandle}>
              Quick Sort
            </li>
            <div className="dropdown-divider"></div>
            <li className="dropdown-item" onClick={algoHandle}>
              Quick Sort 3
            </li>
            <div className="dropdown-divider"></div>
            <li className="dropdown-item" onClick={algoHandle}>
              Heap Sort
            </li>
          </ul>
        </div>
        <div className="dropdown putmargin">
          <button
            type="button"
            className="btn shadow-none dropdown-toggle navButtons"
            data-toggle="dropdown">
            {props.arraySize}
          </button>
          <ul className="dropdown-menu dp-size">
            <li className="dropdown-item" onClick={sizeHandle}>
              10
            </li>
            <div className="dropdown-divider"></div>
            <li className="dropdown-item" onClick={sizeHandle}>
              25
            </li>
            <div className="dropdown-divider"></div>
            <li className="dropdown-item" onClick={sizeHandle}>
              50
            </li>
            <div className="dropdown-divider"></div>
            <li className="dropdown-item" onClick={sizeHandle}>
              75
            </li>
            <div className="dropdown-divider"></div>
            <li className="dropdown-item" onClick={sizeHandle}>
              100
            </li>
          </ul>
        </div>
        <button
          id="random"
          type="button"
          className="btn shadow-none navButtons"
          onClick={props.onRandomize}>
          Randomize!
        </button>
      </div>
    </div>
  );
};
export default Navbar;
