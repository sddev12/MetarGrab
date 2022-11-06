import { MetarData } from "../../types/MetarTypes";
import { Table } from "react-bootstrap";

export default function Wind(props: MetarData) {
  return (
    <>
      <h4>Wind</h4>
      <Table>
        <tbody>
          <tr>
            <td>Direction</td>
            <td>{props.wind.degrees}</td>
          </tr>
          <tr>
            <td>Speed kts</td>
            <td>{props.wind.speed_kts}</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}
