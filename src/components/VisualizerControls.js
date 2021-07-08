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
    </div>
  );
};

export default VisualizerControls;
