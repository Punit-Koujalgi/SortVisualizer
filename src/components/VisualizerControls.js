import {
  MdPlayArrow as Play,
  MdPause as Pause,
  MdSkipNext as Forward,
  MdSkipPrevious as Backward,
  MdRepeat as Repeat,
} from "react-icons/md";

const VisualizerControls = (props) => {
  let onPlay;
  if (props.traceState.traceStep === -1) onPlay = props.onRun;
  else onPlay = props.onContinue;
  let playDisabled = false;
  if (
    (props.traceState.traceStep >= props.traceState.trace.length - 1 &&
      props.traceState.traceStep !== -1) ||
    props.traceState.trace.length <= 0
  )
    playDisabled = true;

  let forwardDisabled = false;
  if (props.traceState.traceStep >= props.traceState.trace.length - 1)
    forwardDisabled = true;
  let backwardDisabled = props.traceState.traceStep <= 0;
  let repeatDisabled = props.traceState.traceStep <= 0;
  const onRunHere = () => {
    props.onRun(props.traceState.trace);
  };
  return (
    <div className="container mt-2">
      <button className="btn btn-info" onClick={props.onBackward}>
        Backward
      </button>
      <button className="btn btn-info" onClick={onRunHere}>
        play
      </button>
      <button className="btn btn-info" onClick={props.onContinue}>
        continue
      </button>
      <button className="btn btn-info" onClick={props.onPause}>
        pause
      </button>
      <button className="btn btn-info" onClick={props.onForward}>
        Forward
      </button>
    </div>
  );
};

export default VisualizerControls;
