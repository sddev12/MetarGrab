import { MetarData } from "../../types/MetarTypes";

export default function ApInfo(props: MetarData) {
  return (
    <>
      <div className="mt-3">
        <hr />
        <h2>{props.icao} | {props.station.name}</h2>
        <h5>{props.station.location}</h5>
        <h6>{props.observed}</h6>
        <br />
        <h6>{props.raw_text}</h6>
      </div>
      <hr />
    </>
  );
}
