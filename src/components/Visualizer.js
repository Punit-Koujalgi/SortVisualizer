import { useState, useEffect } from "react";
import { initialTraceState, initialVisualState } from "../utilities/Constants";
import "./Visualizer.css";
import {
  resetVisualState,
  resetTraceState,
  clearTimeoutIds,
} from "../utilities/visualStates";
import SortChart from "./SortChart";
import VisualizerControls from "./VisualizerControls";
import ProgressBar from "./Parts/ProgressBar";
import ColorKey from "./ColorKey";
import SortInfo from "./SortInfo";

const Visualizer = (props) => {
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [visualState, setVisualState] = useState(initialVisualState);
  const [traceState, setTrace] = useState(initialTraceState);
  const [timeoutIds, settimeoutIds] = useState([]);

  //console.log(visualState);
  useEffect(() => {
    setVisualState(resetVisualState(props.array));
    setTrace(resetTraceState(props.trace));
    settimeoutIds(clearTimeoutIds(timeoutIds));
  }, [props.array, props.trace]);

  const changeVisualState = (item) => {
    setVisualState((prevVisualState) => {
      //console.log("here");
      return {
        originalArray: prevVisualState.originalArray,
        array: item.array,
        groupA: item.groupA,
        groupB: item.groupB,
        groupC: item.groupC,
        groupD: item.groupD,
        sortedIndices: item.sortedIndices,
      };
    });
  };

  const run = (trace) => {
    //take trace to enable continue function
    const timeoutIds = [];
    const timer = 250 / playbackSpeed;
    console.log("run");
    trace.forEach((item, i) => {
      let timeoutId = setTimeout(
        (item) => {
          setTrace((prevTrace) => {
            return {
              trace: prevTrace.trace,
              traceStep: prevTrace.traceStep + 1,
            };
          });
          changeVisualState(item);
        },
        i * timer,
        item
      );
      timeoutIds.push(timeoutId);
    });
    let timeoutId = setTimeout(settimeoutIds([]), trace.length * timer);
    timeoutIds.push(timeoutId);
    settimeoutIds(timeoutIds);
  };

  const pause = () => {
    settimeoutIds(clearTimeoutIds(timeoutIds));
  };

  const continuation = () => {
    const trace = traceState.trace.slice(traceState.traceStep);
    run(trace);
  };

  const stepForward = () => {
    const trace = traceState.trace;
    const step = traceState.traceStep;
    if (step < trace.length - 1) {
      const item = trace[step + 1];
      setTrace((prevTrace) => {
        return { trace: prevTrace.trace, traceStep: prevTrace.traceStep + 1 };
      });
      changeVisualState(item);
    }
  };

  const stepBackward = () => {
    const trace = traceState.trace;
    const step = traceState.traceStep;
    if (step > 0) {
      const item = trace[step - 1];
      setTrace((prevTrace) => {
        return { trace: prevTrace.trace, traceStep: prevTrace.traceStep - 1 };
      });
      changeVisualState(item);
    }
  };
  useEffect(() => {
    const playing = timeoutIds.length > 0;
    if (playing) continuation();
  }, [playbackSpeed]);
  const adjustPlaybackSpeed = (speed) => {
    pause();
    const playSpeed = Number(speed.split("x")[0]);
    setPlaybackSpeed(playSpeed);
  };
  const repeat = () => {
    document.getElementById("progress_active").style.width = "0%";
    settimeoutIds(clearTimeoutIds(timeoutIds));
    setVisualState(resetVisualState(props.array));
    setTrace(resetTraceState(props.trace));
  };
  return (
    <div className="SortVisualizer">
      <SortChart
        numbers={visualState.array}
        maxNum={Math.max(...visualState.array)}
        groupA={visualState.groupA}
        groupB={visualState.groupB}
        groupC={visualState.groupC}
        groupD={visualState.groupD}
        sortedIndices={visualState.sortedIndices}
      />
      <div className="ProgressBarOut">
        <ProgressBar
          width={
            traceState.trace.length > 0
              ? (traceState.traceStep / (traceState.trace.length - 1)) * 100
              : 0
          }
        />
      </div>
      <VisualizerControls
        traceState={traceState}
        onRun={run}
        onContinue={continuation}
        onPause={pause}
        onForward={stepForward}
        onBackward={stepBackward}
        onRepeat={repeat}
        onAdjustSpeed={adjustPlaybackSpeed}
        playing={timeoutIds.length > 0}
        playbackSpeed={playbackSpeed}
      />
      <ColorKey {...props.colorKey} />
      <SortInfo {...props.desc} />
    </div>
  );
};

export default Visualizer;
