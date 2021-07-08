import { useEffect } from "react";
import {
  MdPlayArrow as Play,
  MdPause as Pause,
  MdSkipNext as Forward,
  MdSkipPrevious as Backward,
  MdRepeat as Repeat,
} from "react-icons/md";
import Button from "./Parts/Button";
import "./VisualizerControls.css";

const VisualizerControls = (props) => {
  useEffect(() => {
    if (!props.playing) document.getElementById("playback").disabled = false;
    else document.getElementById("playback").disabled = true;
  }, [props.playing]);

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
    if (props.traceState.traceStep === -1) props.onRun(props.traceState.trace);
    else props.onContinue();
  };
  const playblackHandler = (event) => {
    const speed = event.target.innerHTML;
    document.getElementById("playback").innerHTML = speed;
    props.onAdjustSpeed(speed);
  };
  return (
    <div className="VisualizerControls">
      <Button
        icon={Repeat}
        onClick={props.onRepeat}
        disabled={repeatDisabled}
        className="VisualizerControls__Button"
      />

      <Button
        icon={Backward}
        onClick={props.onBackward}
        disabled={backwardDisabled}
        iconClass="VisualizerControls__Icon"
        className="VisualizerControls__Button"
      />
      <Button
        icon={props.playing ? Pause : Play}
        onClick={props.playing ? props.onPause : onRunHere}
        disabled={playDisabled}
        raised
        iconClass="VisualizerControls__Icon"
        className="VisualizerControls__CenterButton"
      />
      <Button
        icon={Forward}
        onClick={props.onForward}
        disabled={forwardDisabled}
        iconClass="VisualizerControls__Icon"
        className="VisualizerControls__Button"
      />
      {/* <Menu
        items={["0.25x", "0.5x", "1x", "2x", "4x"]}
        placeholder="Speed"
        selected={`${props.playbackSpeed}x`}
        onSelect={props.onAdjustSpeed}
        noDropIcon
        className="VisualizerControls__SpeedButton"
      /> */}
      <div className="dropdown">
        <button
          id="playback"
          type="button"
          className="btn shadow-none"
          data-toggle="dropdown">
          {props.playbackSpeed.toString() + "x"}
        </button>
        <ul className="dropdown-menu">
          <li className="dropdown-item" onClick={playblackHandler}>
            0.25x
          </li>
          <div className="dropdown-divider"></div>
          <li className="dropdown-item" onClick={playblackHandler}>
            0.5x
          </li>
          <div className="dropdown-divider"></div>
          <li className="dropdown-item" onClick={playblackHandler}>
            1x
          </li>
          <div className="dropdown-divider"></div>
          <li className="dropdown-item" onClick={playblackHandler}>
            2x
          </li>
          <div className="dropdown-divider"></div>
          <li className="dropdown-item" onClick={playblackHandler}>
            4x
          </li>
        </ul>
      </div>
    </div>
  );
};

export default VisualizerControls;
