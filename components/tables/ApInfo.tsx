import { AirportInfo } from "../../types/MetarTypes";

export default function ApInfo(props: AirportInfo) {
  return (
    <>
      <div className="mt-3">
        <hr />
        <h2>{props.icao} | {props.name}</h2>
        <h5>{props.location}</h5>
        <h6>{props.observed}</h6>
        <br />
        <h6>{props.rawText}</h6>
      </div>
      <hr />
    </>
  );
}
